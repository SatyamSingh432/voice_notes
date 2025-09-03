import { useState, useEffect } from "react";
import { createNote } from "../apis.js";
import { useNavigate } from "react-router-dom";

function CreateNote() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recog = new SpeechRecognition();
      recog.continuous = true;
      recog.interimResults = false;
      recog.lang = "en-US";

      recog.onresult = (event) => {
        let text = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            text += event.results[i][0].transcript + " ";
          }
        }
        if (text) {
          setTranscript((prev) => prev + text);
        }
      };

      setRecognition(recog);
    } else {
      alert("Speech Recognition not supported in this browser.");
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };

  const sendTranscriptToBackend = async () => {
    try {
      await createNote({ transcript: transcript });
      alert("Transcript sent to backend");
      navigate("/");
      setTranscript("");
      if (recognition) {
        recognition.stop();
        setListening(false);
      }
    } catch (err) {
      console.error("Error sending to backend:", err);
      alert("Failed to send transcript");
    }
  };

  return (
    <div className="container mx-auto px-4 ">
      <div className="bg-white p-8 rounded-lg  w-full max-w-2xl mx-auto">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Create New Note{" "}
        </h3>
        <div className="flex justify-center mb-6">
          {!listening ? (
            <button
              onClick={startListening}
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 transition duration-200 ease-in-out cursor-pointer w-full"
            >
              Start Recording
            </button>
          ) : (
            <button
              onClick={stopListening}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200 ease-in-out cursor-pointer w-full"
            >
              Stop Recording
            </button>
          )}
        </div>
        {listening && (
          <div className="border rounded-xl p-4 h-60 overflow-y-auto bg-gray-50">
            {transcript ? (
              <p className="text-gray-800 whitespace-pre-wrap">{transcript}</p>
            ) : (
              <p className="text-gray-400 italic">
                Start speaking to see text...
              </p>
            )}
          </div>
        )}

        {transcript && (
          <div className="flex flex-col justify-center">
            <button
              className="bg-black text-white px-6 py-2 mt-4 w-full rounded-lg hover:bg-gray-600"
              onClick={sendTranscriptToBackend}
            >
              Send Text to Backend
            </button>
            <button
              className="bg-black text-white px-6 py-2 mt-4 w-full rounded-lg hover:bg-gray-600"
              onClick={() => {
                setTranscript("");
              }}
            >
              Delete text
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateNote;
