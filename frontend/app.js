// frontend/app.js

const form = document.getElementById('task-form');
const input = document.getElementById('tasks-input');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const lines = input.value.trim().split('\n');
  const tasks = lines.map(line => {
    const [title, durationStr] = line.split('|').map(s => s.trim());
    const duration = parseInt(durationStr, 10);
    return {
      title,
      duration: isNaN(duration) ? undefined : duration,
    };
  });

  const res = await fetch('http://localhost:3000/api/schedule', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tasks }),
  });

  const data = await res.json();
  if (data.scheduled) {
    result.innerHTML = '<h2>Scheduled Tasks</h2><ul>' +
      data.scheduled.map(task => `<li><strong>${task.title}</strong>: ${task.start} - ${task.end}</li>`).join('') +
      '</ul>';
  } else {
    result.innerHTML = '<p>Error scheduling tasks.</p>';
  }
});
