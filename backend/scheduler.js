// backend/scheduler.js

function autoScheduleTasks(tasks, startTime = "08:00") {
    const scheduledTasks = [];
    let [hour, minute] = startTime.split(":").map(Number);
    let currentTime = new Date();
    currentTime.setHours(hour, minute, 0, 0);
  
    tasks.forEach((task, index) => {
      const duration = task.duration || 30; // default 30 mins
      const start = new Date(currentTime);
      const end = new Date(currentTime.getTime() + duration * 60000);
  
      scheduledTasks.push({
        title: task.title,
        start: start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        end: end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
  
      currentTime = end;
    });
  
    return scheduledTasks;
  }
  
  module.exports = { autoScheduleTasks };
  