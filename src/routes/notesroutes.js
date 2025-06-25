import express from "express"
import { createnote, deletenote, getAllNotes, updatenote, getNoteById } from "../controllers/notescontroller.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById );

router.post("/", createnote);

router.put("/:id", updatenote );

router.delete("/:id", deletenote);

export default router;