import { Router } from "express";
import { getNote, addNote } from "../controllers/notes.controller.js";
const router = Router();

router.get("/", getNote);
router.post("/add", addNote);

export default router;
