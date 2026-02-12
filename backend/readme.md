# Primetrade Backend Assignment

This project is a scalable REST API built with Node.js and Express, featuring JWT-based authentication, role-based access control, and CRUD operations. A basic React frontend is included to demonstrate API integration.

---

## 🚀 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcrypt.js
- Swagger API Documentation

### Frontend
- React.js (Vite)
- Axios
- React Router DOM

---

## 🔐 Features

- User registration & login with password hashing
- JWT-based authentication
- Role-based access (User / Admin)
- CRUD APIs for Tasks
- API versioning (`/api/v1`)
- Input validation & error handling
- Swagger API documentation
- Simple frontend UI for testing APIs

---

## 📂 Project Structure

backend/
├── src/
│ ├── config/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ └── app.js
├── server.js
└── swagger.yaml


---

## ⚙️ Setup Instructions

### Backend
```bash
git clone <repo-url>
cd backend
npm install
npm run dev

---


📑 API Documentation

Swagger UI is available at:

http://localhost:5000/api-docs


