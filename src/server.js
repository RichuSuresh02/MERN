import express from "express";
import notesroutes from "./routes/notesroutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

// console.log(process.env.MONGO.URI123
// )

const app = express()
const PORT = process.env.PORT || 5001
// console.log("Starting server...");
connectDB();
app.use("/api/notes", notesroutes);




app.listen(5001, () => {
    console.log("Server started on PORT:" , PORT);
}); 

