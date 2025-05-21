// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import NotesRoutes from './Routes/NotesRoutes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();

const app = express();

// Middleware 
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.path}`);
//   next();
// });

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

// app.use((req,res,next)=>{
//     console.log(`Req Method is ${req.method} And Url is ${req.url}`);
// });

app.use("/notes", NotesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client", "dist", "index.html"));
  });
}


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Database Connected Successfully");
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed", err);
  });


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
