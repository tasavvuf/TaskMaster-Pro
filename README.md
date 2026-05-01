# TaskMaster-Pro

TaskMaster-Pro is a full-stack task manager built with React, Vite, Express, MongoDB, and Tailwind CSS.

## What It Does

- Create tasks with title, description, priority, category, and completion state
- Read all tasks from the MongoDB-backed API
- Update tasks inline through the edit form
- Toggle completion status
- Delete tasks
- Filter by status, priority, and category
- Search tasks by title
- View task stats and completion progress

## Tech Stack

- Frontend: React, Vite, Axios, Tailwind CSS
- Backend: Node.js, Express, Mongoose, CORS, dotenv
- Database: MongoDB

## Project Structure

- `src/` - React frontend
- `backend/` - Express API and MongoDB models

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Add your MongoDB connection string to `.env`:

```env
MONGO_URI=your_mongodb_connection_string
```

3. Start the backend:

```bash
npm run server
```

4. Start the frontend:

```bash
npm run dev
```

## API Endpoints

- `GET /tasks` - fetch all tasks
- `POST /task` - create a task
- `PUT /task/:id` - update a task
- `DELETE /task/:id` - delete a task

## Notes

- The frontend talks directly to the local backend at `http://localhost:5000`
- Task data is persisted in MongoDB, so refreshes no longer clear the list

