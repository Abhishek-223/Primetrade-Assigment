import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    await api.post("/tasks", { title, description });
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    if (editingTaskId === id) {
      setEditingTaskId(null);
      setEditTitle("");
      setEditDescription("");
    }
    fetchTasks();
  };

  const startEdit = (task) => {
    setEditingTaskId(task._id);
    setEditTitle(task.title ?? "");
    setEditDescription(task.description ?? "");
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const saveEdit = async (id) => {
    await api.put(`/tasks/${id}`, {
      title: editTitle,
      description: editDescription,
    });
    cancelEdit();
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h2>Dashboard</h2>
          <button onClick={logout} className="secondary-btn">
            Logout
          </button>
        </div>

        <form onSubmit={createTask} className="task-form">
          <input
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-input"
          />
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-input"
          />
          <button type="submit" className="primary-btn">
            Add Task
          </button>
        </form>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id} className="task-item">
              {editingTaskId === task._id ? (
                <>
                  <div className="task-edit-fields">
                    <input
                      className="text-input"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="Task title"
                    />
                    <input
                      className="text-input"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      placeholder="Description"
                    />
                  </div>
                  <div className="task-actions">
                    <button
                      type="button"
                      onClick={() => saveEdit(task._id)}
                      className="primary-btn"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="secondary-btn"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="task-title">{task.title}</p>
                    <p className="task-desc">{task.description}</p>
                  </div>
                  <div className="task-actions">
                    <button
                      type="button"
                      onClick={() => startEdit(task)}
                      className="secondary-btn"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteTask(task._id)}
                      className="danger-btn"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
