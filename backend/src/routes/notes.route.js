import { Router } from "express";
import {
  getNote,
  addNote,
  getNoteById,
  deleteNote,
  updateNote,
  summarizeNote,
} from "../controllers/notes.controller.js";
const router = Router();

router.get("/", getNote);
router.post("/add", addNote);
router.get("/:id", getNoteById);
router.delete("/:id", deleteNote);
router.post("/update/:id", updateNote);
router.post("/:id/summarize", summarizeNote);

export default router;
