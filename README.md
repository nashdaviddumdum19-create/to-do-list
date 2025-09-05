Auto To-Do Scheduler

This is a simple full-stack web application that lets you enter a list of tasks and then automatically schedules them into a timeline. You can also set optional breaks or wait times between tasks.

The backend is built with Express.js, and the frontend uses plain JavaScript, HTML, and CSS.

Features

You can input tasks with an optional duration (for example: “Task name | minutes”).

If no time is given, the default duration for a task is 30 minutes.

The app automatically schedules tasks starting from a configurable start time.

You can set a wait time (or break) between tasks.

The interface is clean, responsive, and designed in dark mode.

Project Structure

The project is organized into two main parts: backend and frontend.

The backend contains the server file that runs the Express API and serves static files, as well as the scheduling logic.

The frontend contains the main HTML page, the JavaScript that interacts with the backend API, and the CSS for styling the dark theme.

There is also a package.json file for dependencies and a README file for documentation.

Installation and Setup

First, clone the repository and go into the project folder.

Install the necessary dependencies.

Run the backend server. The server will start at “http://localhost:3000”
.

Open the app in your browser at the same address.

Once the app is running, you can type tasks into the form, one per line.

Example Usage

If you enter the following tasks:

Task A with a duration of 45 minutes

Task B with a duration of 30 minutes

Task C with no duration (default 30 minutes)

The scheduler will generate:

Task A from 8:00 to 8:45

Task B from 8:50 to 9:20

Task C from 9:25 to 9:55

It automatically includes a 5-minute break between tasks.

Configuration

The default start time is 8:00 AM.

The default task duration is 30 minutes.

The default break between tasks is 5 minutes.

You can change these settings in the scheduler file. For example, you can start tasks at 9:00 AM with a 10-minute break between them.

License

The project uses the ISC License. You are free to modify and use it for your own purposes.
