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
app.use(cors({
    origin: "http://localhost:5173",
}));

// app.use((req,res,next)=>{
//     console.log(`Req Method is ${req.method} And Url is ${req.url}`);
// });

app.use("/notes", NotesRoutes);
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Mongodb Database Is Connected Succesfully")
})
.catch((err)=>{
    console.error("Mongodb DataBabe Is Failed To Connected",err)
}); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
