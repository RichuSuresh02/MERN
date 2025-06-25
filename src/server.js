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
// middle ware
app.use(express.json());
app.use("/api/notes", notesroutes);

app.listen(PORT, () => {
    console.log("Server started on PORT:" , PORT);
}); 

