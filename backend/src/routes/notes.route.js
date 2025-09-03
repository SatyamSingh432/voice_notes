import { Router } from "express";
import {
  getNote,
  addNote,
  getNoteById,
  deleteNote,
} from "../controllers/notes.controller.js";
const router = Router();

router.get("/", getNote);
router.post("/add", addNote);
router.get("/:id", getNoteById);
router.delete("/:id", deleteNote);

export default router;
