const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { autoScheduleTasks } = require('./scheduler');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static frontend files from the sibling 'frontend' folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// API Endpoint to schedule tasks
app.post('/api/schedule', (req, res) => {
  const tasks = req.body.tasks;
  if (!Array.isArray(tasks)) {
    return res.status(400).json({ error: 'Tasks must be an array' });
  }

  const scheduled = autoScheduleTasks(tasks);
  res.json({ scheduled });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
