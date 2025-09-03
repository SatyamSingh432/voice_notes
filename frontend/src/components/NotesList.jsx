import React, { useState, useEffect } from "react";
import { getNotes, deleteNote } from "../apis.js";
import NoteCard from "./NoteCard.jsx";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = await getNotes();
      setNotes(res.data);
    };
    data();
  }, []);

  const deleteNoteHandler = async (id) => {
    await deleteNote(id);
    alert("Note deleted");
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((currentnote) => (
            <NoteCard
              key={currentnote._id}
              note={currentnote}
              deleteNoteHandler={deleteNoteHandler}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">
          No notes available. Create one!
        </p>
      )}
    </div>
  );
};

export default NotesList;
