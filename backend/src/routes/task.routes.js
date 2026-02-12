import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import isAdmin from "../middlewares/role.middleware.js";
import {
  createTask,
  getMyTasks,
  updateTask,
  deleteTask,
  getAllTasks
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getMyTasks);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

// Admin only
router.get("/admin/all", authMiddleware, isAdmin, getAllTasks);

export default router;
