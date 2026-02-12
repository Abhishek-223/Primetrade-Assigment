import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import authMiddleware from "./middlewares/auth.middleware.js";
import isAdmin from "./middlewares/role.middleware.js";
import taskRoutes from "./routes/task.routes.js";
import swaggerSetup from "./config/swagger.js";

const app = express();

app.use(cors());
app.use(express.json());
swaggerSetup(app);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/v1/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Access granted",
    user: req.user
  });
});

app.get(
  "/api/v1/admin",
  authMiddleware,
  isAdmin,
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

export default app;
