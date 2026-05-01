import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  tittle: { type: String, required: true, trim: true },
  des: { type: String, trim: true },
  priority: { 
  type: String, 
  enum: ["Low", "Medium", "High"], 
  default: "Low" 
},
  cata: { type: String, required: true, default: "Work" },
  isDone: { type: Boolean, required: true, default: false }
}, { timestamps: true });

export const taskModel = mongoose.model("tasks", taskSchema);
