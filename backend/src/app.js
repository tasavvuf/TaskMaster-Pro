import express from "express"
import { taskModel } from "./model/task.model.js"
import cors from "cors"

const app = express()

// Middleware
app.use(express.json())
app.use(cors()) 

// Routes
app.get("/", (_, res) => {
  res.send("welcome to server")
})

// Get all tasks
app.get("/tasks", async (_, res) => {
  try {
    const tasks = await taskModel.find()

    res.json({ tasks })
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error: error.message })
  }
})

// Create task
app.post("/task", async (req, res) => {
  try {
    const newTask = await taskModel.create(req.body)

    res.status(201).json({
      message: "Task created successfully",
      task: newTask
    })
  } catch (error) {
    res.status(400).json({ message: "Error creating task", error: error.message })
  }
})
app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params

    const deleted = await taskModel.findByIdAndDelete(id)

    if (!deleted) {
      return res.status(404).json({ message: "Task not found" })
    }

    res.json({ message: "Task deleted successfully", deleted })
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error: error.message })
  }
})

app.put("/task/:id", async (req, res) => {
  try {
    const { id } = req.params

    const updatedTask = await taskModel.findByIdAndUpdate(id, req.body, {
     returnDocument: 'after',
      runValidators: true
    })

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" })
    }

    res.json({ message: "Task updated successfully", updatedTask })
  } catch (error) {
    res.status(400).json({ message: "Error updating task", error: error.message })
  }
})
app.put("/task/:id/toggle",async(req,res)=>{
  try {
    const {id} = req.params
  const task = await taskModel.findById(id)
  if(!task) return res.status(404).send("cant find the task with this id")
  task.isDone = !task.isDone
  await task.save()
  res.json({task})
  } catch (error) {
  res.status(400).json({ message: "Error updating task", error: error.message })  }
  
})
export default app
