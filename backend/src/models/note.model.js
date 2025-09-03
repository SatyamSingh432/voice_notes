import mongoose from "mongoose";

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    transcript: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
