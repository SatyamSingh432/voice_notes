import Note from "../models/note.model.js";
import { summarizeText } from "../services/genai.services.js";

export const getNote = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

export const addNote = async (req, res) => {
  try {
    const newNote = new Note({
      transcript: req.body.transcript,
    });
    await newNote.save();
    res.json("Note added!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json("Note deleted.");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

export const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (note) {
      note.transcript = req.body.transcript;
      note.summary = req.body.summary;
      await note.save();
      res.json("Note updated!");
    } else {
      res.status(404).json("Note not found");
    }
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

export const summarizeNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (note) {
      const summary = await summarizeText(note.transcript);
      note.summary = summary;
      await note.save();
      res.json({ summary: summary });
    } else {
      res.status(404).json("Note not found");
    }
  } catch (err) {
    res.status(500).json("Error: " + err);
  }
};
