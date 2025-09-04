import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto pt-4 px-4">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Voice Notes
        </h1>
        <Link
          to="/create"
          className="block w-[50%] mx-auto  py-4 px-6 bg-black text-white font-bold rounded-lg text-center text-xl mb-8 hover:bg-gray-800 transition duration-200"
        >
          Recording Page
        </Link>
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/edit/:id" element={<EditNote />} />
          <Route path="/create" element={<CreateNote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
