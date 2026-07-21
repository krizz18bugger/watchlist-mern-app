# Anime Watchlist Tracker 📺

Track, manage, and conquer your anime backlog. 

This is a full-stack web application that allows users to seamlessly manage their media consumption. It features a clean, responsive single-column layout and a real-time database connection.

🌐 **Live Demo:** https://watchlist-mern-app.vercel.app/

## 🚀 Features

* **Full CRUD Functionality:** Create, Read, Update, and Delete entries in real-time.
* **Streamlined UI:** A mobile-friendly, vertical layout that makes adding and viewing media straightforward and accessible.
* **Custom Styling:** Built with Tailwind CSS for layout structure and Vanilla CSS for custom animations (glowing text effects) and background rendering.
* **RESTful API:** Custom Node.js/Express backend handling database routing and asynchronous data fetching.
* **Authentication & Authorization:** Users can sign up and log in. Passwords are hashed and salted using bcrypt and authentication is handled with JSON Web Tokens (JWT).

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
* bcrypt (password hashing)
* jsonwebtoken (JWT generation & verification)

## 🔐 Authentication & Authorization

This project includes a complete authentication and authorization system:

- Passwords are hashed and salted on the server using `bcrypt` before being stored in MongoDB.
- Upon successful sign-up or login the server generates a JSON Web Token (JWT) using `jsonwebtoken` and returns it to the client.
- Protected API routes are guarded by middleware that verifies the JWT; only requests with a valid token can access protected resources.
- On the frontend, the JWT should be stored client-side (for example in `localStorage` or in a secure cookie) and included in requests to protected endpoints using the `Authorization: Bearer <token>` header.

Environment variables required for authentication:
- `MONGO_URI` — your MongoDB connection string.
- `JWT_SECRET_KEY` — secret used to sign JWTs (keep this private).
- Optionally: `JWT_EXPIRES_IN` — token expiry duration (e.g., `1h`, `7d`).


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
* Add your JWT secret: `JWT_SECRET=your_jwt_secret_here`
* Start the server: `npm run dev`

**3. Setup the Frontend:**
Open a new terminal tab and run:
```bash
cd frontend
npm install
npm run dev
```

After starting both servers, you can sign up as a new user and log in through the frontend. The client will receive a JWT after login which it uses to authenticate requests to the backend for protected operations (create, update, delete entries when required).

## 🧠 Technical Learnings

Building this project solidified my understanding of connecting a decoupled React frontend to an Express backend. It also provided hands-on experience with structuring clean, responsive column layouts and integrating a secure authentication flow using industry-standard libraries (bcrypt and jsonwebtoken) to safely handle user credentials and session state.


## 📦 Deployment

* **Backend:** Hosted on [Render](https://render.com)
* **Frontend:** Hosted on [Vercel](https://vercel.com)

This project demonstrates my ability to build, deploy, and maintain a complete MERN stack application from concept to production.
