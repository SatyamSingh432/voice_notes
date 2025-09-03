import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote, getNote } from "../apis.js";

const EditNote = () => {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      const res = await getNote(id);
      setTranscript(res.data.transcript);
      if (res.data.summary) {
        setSummary(res.data.summary);
      }
    };
    data();
  }, [id]);

  const onChangeTranscript = (e) => {
    setTranscript(e.target.value);
    setSummary("");
  };

  const editNoteHandler = async () => {
    const note = {
      transcript: transcript,
      summary: summary,
    };

    await updateNote(id, note);
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Edit Note
        </h3>
        <form>
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="transcript"
            >
              Transcript:
            </label>
            <textarea
              required
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 ease-in-out"
              id="transcript"
              value={transcript}
              onChange={onChangeTranscript}
              placeholder="Enter note transcript"
              rows="6"
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="summary"
            >
              Summary:
            </label>
            <textarea
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 ease-in-out"
              id="summary"
              value={summary}
              readOnly
              placeholder="Summary will appear here"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-6 flex justify-center">
            <button
              type="button"
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              Generate Summary
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={editNoteHandler}
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 transition duration-200 ease-in-out cursor-pointer w-full"
            >
              Edit Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
