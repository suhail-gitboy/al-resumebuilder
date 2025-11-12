import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { Loginrouter } from "./routes/Loginroutes.js";
import { Crudrouter } from "./routes/Crudroutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8300;

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ CORS setup (Vercel frontend)
app.use(cors({
  origin: "https://al-resumebuilder.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // allows cookies
}));

// ✅ Optional: handle preflight OPTIONS requests
app.options("*", cors({
  origin: "https://al-resumebuilder.vercel.app",
  credentials: true,
}));

// ✅ Routes
app.get("/", (req, res) => {
  res.json("Backend is running!");
});

app.use("/api", Loginrouter);
app.use("/api", Crudrouter);

// ✅ MongoDB connection and server start
mongoose.connect("mongodb+srv://suhail123:5Rgvh1Sdqu0Lk8Wg@cluster0.cc6yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(port, () => console.log(`Server running on port ${port} 🚀`));
  })
  .catch(err => console.error("MongoDB connection error:", err));
