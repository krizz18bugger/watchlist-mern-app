# Anime Watchlist Tracker 📺

Track, manage, and conquer your anime backlog. 

This is a full-stack web application that allows users to seamlessly manage their media consumption. It features a clean, responsive single-column layout and a real-time database connection.

🌐 **Live Demo:** https://watchlist-mern-app.vercel.app/

## 🚀 Features

* **Full CRUD Functionality:** Create, Read, Update, and Delete entries in real-time.
* **Streamlined UI:** A mobile-friendly, vertical layout that makes adding and viewing media straightforward and accessible.
* **Custom Styling:** Built with Tailwind CSS for layout structure and Vanilla CSS for custom animations (glowing text effects) and background rendering.
* **RESTful API:** Custom Node.js/Express backend handling database routing and asynchronous data fetching.

## 💻 Tech Stack

**Frontend:**
* React (Vite)
* Tailwind CSS & Vanilla CSS
* UIverse Integration

**Backend:**
* Node.js & Express.js
* MongoDB Atlas (Cloud Database)
* Mongoose ODM
* CORS & dotenv (Environment Management)

## 🛠️ Local Setup & Installation

To run this project locally, you will need Node.js installed on your machine.

**1. Clone the repository:**
```bash
git clone https://github.com/yourusername/anime-watchlist-mern.git
```

**2. Setup the Backend:**
```bash
cd backend
npm install
```
* Create a `.env` file in the backend directory.
* Add your MongoDB connection string: `MONGO_URI=your_cluster_string_here`
* Start the server: `npm run dev`

**3. Setup the Frontend:**
Open a new terminal tab and run:
```bash
cd frontend
npm install
npm run dev
```

## 🧠 Technical Learnings

Building this project solidified my understanding of connecting a decoupled React frontend to an Express backend. It also provided hands-on experience with structuring clean, responsive column layouts, managing state effectively, and deploying full-stack applications using Render (backend) and Vercel (frontend).

## 📦 Deployment

* **Backend:** Hosted on [Render](https://render.com)
* **Frontend:** Hosted on [Vercel](https://vercel.com)

This project demonstrates my ability to build, deploy, and maintain a complete MERN stack application from concept to production.