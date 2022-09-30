import { Router } from "express";
import {
  addTask,
  editTask,
  deleteTask,
  getAllTasks,
  getTask,
} from "../controllers/taskController";

const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:taskId", getTask);
router.post("/tasks", addTask);
router.put("/tasks/:taskId", editTask);
router.delete("/tasks/:taskId", deleteTask);

export default router;
