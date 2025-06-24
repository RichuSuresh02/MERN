import express from "express"
import { createnote, deletenote, getAllNotes, updatenote } from "../controllers/notescontroller";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createnote);

router.put("/:id", updatenote );

router.delete("/:id", deletenote);

export default router;