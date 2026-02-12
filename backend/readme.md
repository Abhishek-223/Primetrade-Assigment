# PrimeTrade Backend

REST API for authentication and task management using Node.js, Express, MongoDB, and JWT.

## Tech Stack
- Node.js
- Express
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- Password hashing (`bcryptjs`)
- Validation (`express-validator`)
- Swagger UI (`swagger-ui-express` + `yamljs`)

## Features
- User registration and login
- JWT-protected routes
- Role-based access (`user`, `admin`)
- Task CRUD for authenticated users
- Admin endpoint to view all tasks
- Swagger docs

## Project Structure
```text
backend/
  src/
    config/
      db.js
      swagger.js
    controllers/
      auth.controller.js
      task.controller.js
    middlewares/
      auth.middleware.js
      role.middleware.js
    models/
      User.js
      Task.js
    routes/
      auth.routes.js
      task.routes.js
    app.js
  server.js
  swagger.yaml
  package.json
```

## Setup
1. Open terminal in `backend`.
2. Install dependencies:
```bash
npm install
```
3. Create `.env` in `backend` with:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/primetrade
JWT_SECRET=supersecretkey
```
4. Run the server:
```bash
npm run dev
```

Server starts at: `http://localhost:5000`

## API Base URL
`http://localhost:5000/api/v1`

## Main Endpoints
### Auth
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`

### Tasks (JWT required)
- `POST /api/v1/tasks`
- `GET /api/v1/tasks`
- `PUT /api/v1/tasks/:id`
- `DELETE /api/v1/tasks/:id`

### Protected/Test Routes
- `GET /api/v1/protected` (JWT required)
- `GET /api/v1/admin` (JWT + admin role required)
- `GET /api/v1/tasks/admin/all` (JWT + admin role required)

## Swagger Docs
Swagger UI: `http://localhost:5000/api-docs`
