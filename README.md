# Full Stack Assignment

Monorepo containing:
- `backend`: Node.js + Express + MongoDB API with JWT auth
- `frontend`: React (Vite) client for auth and task management

## Project Structure
```text
Backend Assignment/
  backend/
  frontend/
```

## Prerequisites
- Node.js 18+
- npm
- MongoDB running locally (`mongodb://127.0.0.1:27017`)

## Backend Setup (`backend`)
1. Go to backend folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Create `.env` file:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/primetrade
JWT_SECRET=supersecretkey
```
4. Start backend:
```bash
npm run dev
```

Backend base URL: `http://localhost:5000/api/v1`

Useful backend URLs:
- API root check: `http://localhost:5000/`
- Swagger docs: `http://localhost:5000/api-docs`

## Frontend Setup (`frontend`)
1. Open a new terminal and go to frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start frontend:
```bash
npm run dev
```

Frontend usually runs at: `http://localhost:5173`

## Frontend-Backend Connection
Frontend API client is configured in `frontend/src/api/axios.js` with:
- `baseURL = http://localhost:5000/api/v1`

So backend must be running on port `5000` for the frontend to work.

## Run Both Together
Use two terminals:
1. Terminal 1: run backend (`cd backend && npm run dev`)
2. Terminal 2: run frontend (`cd frontend && npm run dev`)

## Core API Endpoints
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/tasks`
- `POST /api/v1/tasks`
- `PUT /api/v1/tasks/:id`
- `DELETE /api/v1/tasks/:id`
