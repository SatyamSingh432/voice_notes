import Note from "../models/note.model.js";

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
