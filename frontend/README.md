# HANTEE Restaurant Website

A modern, full-stack restaurant website featuring a beautiful animated UI, online table reservations, and responsive design.

## Tech Stack

**Frontend:**
- React 18 + Vite
- React Router DOM
- React Scroll (smooth navigation)
- React Hot Toast (notifications)
- Axios

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- CORS enabled

## Features

- Elegant landing page with smooth animations
- Interactive navigation with smooth scrolling
- Online table reservation system
- Menu showcase with categorized dishes
- Meet the team section
- Customer testimonials
- Responsive design for all devices
- Modern glassmorphism UI effects
- Custom CSS animations (fade-in, float, scale, bounce)

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB database

### Frontend

cd frontend
npm install
npm run dev


### Backend

cd backend
npm install
npm start


## Environment Variables

Create `backend/config/config.env`:

PORT=4000
FRONTEND_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string


## Project Structure

├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSections.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── Qualities.jsx
│   │   │   ├── Reservation.jsx
│   │   │   ├── Team.jsx
│   │   │   └── who_we_are.jsx
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Success.jsx
│   │   │   └── NotFound.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── public/
├── backend/
│   ├── controller/
│   ├── database/
│   ├── middleware/
│   ├── routes/
│   ├── app.js
│   └── server.js


## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/reservation/send` | Create a new reservation |