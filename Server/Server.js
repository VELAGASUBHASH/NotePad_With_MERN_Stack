// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import NotesRoutes from './Routes/NotesRoutes.js';
import cors from 'cors';



dotenv.config();

const app = express();

// Middleware 
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.path}`);
//   next();
// });

  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );

app.use("/notes", NotesRoutes);



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
