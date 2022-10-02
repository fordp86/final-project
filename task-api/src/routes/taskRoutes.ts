import { Router } from "express";
import {
  addTask,
  editTask,
  deleteTask,
  getAllTasks,
  getTask,
} from "../controllers/taskController";

const router = Router();

router.get("/", getAllTasks);
router.get("/:taskId", getTask);
router.post("/", addTask);
router.put("/:taskId", editTask);
router.delete("/:taskId", deleteTask);

export default router;
