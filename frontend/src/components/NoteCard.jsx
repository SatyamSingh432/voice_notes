import React from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ note }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4 border border-gray-200 flex flex-col justify-between h-full">
      <div className="flex-grow">
        <p className="text-gray-800 text-lg mb-4">
          <span className="font-semibold">Transcript:</span> {note.transcript}
        </p>
        {note.summary && (
          <p className="text-gray-700 text-base mb-4">
            <span className="font-semibold">Summary:</span> {note.summary}
          </p>
        )}
      </div>
      <div className="flex justify-end space-x-3 mt-4">
        <Link
          to={"/edit/" + note._id}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-200"
        >
          Edit
        </Link>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-200">
          Delete
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200">
          Generate Summary
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
