import React from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ note, deleteNoteHandler, isLoading }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4 border border-gray-200 flex flex-col justify-between h-full">
      <div className="flex-grow">
        <p className="text-gray-800 text-lg mb-4">
          <span className="font-semibold">Transcript:</span> {note.transcript}
        </p>
      </div>
      <div className="flex flex-col mt-4 gap-2 text-center">
        <div className="flex justify-between gap-4">
          <Link
            to={"/edit/" + note._id}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md w-full text-center hover:bg-gray-300 transition duration-200"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              deleteNoteHandler(note._id);
            }}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md w-full text-center cursor-pointer hover:bg-gray-300 transition duration-200"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>

        <Link
          to={"/edit/" + note._id}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200 cursor-pointer"
        >
          Generate Summary
        </Link>
      </div>
    </div>
  );
};

export default NoteCard;
