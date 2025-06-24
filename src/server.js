import express from "express";

import notesroutes from "./routes/notesroutes.js";
import { connectDB } from "./config/db.js";

const app = express()
console.log("Starting server...");
connectDB();
app.use("/api/notes", notesroutes);




app.listen(5001, () => {
    console.log("Server started on PORT: 5001")
}); 

