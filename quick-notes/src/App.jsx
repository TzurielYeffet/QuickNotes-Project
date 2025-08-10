import { useState } from "react";
import { Modal } from "@mantine/core";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NoteForm from "./NoteForm/NoteForm.jsx";
import NotesList from "./NotesList/NotesList.jsx";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const [viewModalOpened,setViewModalOpened] = useState(false);
  const [selectedNote,setSelectedNote] = useState(null);


  const addNote = (noteData) => {
    const newNote = {
      id: Date.now(),
      ...noteData,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
    setNotes([...notes, newNote]);
  };

const handleViewNote = (note) => {
  setSelectedNote(note);
  setViewModalOpened(true);
};

const handleCloseModal = () => {
  setViewModalOpened(false);
  setSelectedNote(null);
};





  return (
    <>
        <div className="form-container">
          <NoteForm onAddNote={addNote} />
        </div>

        <div className="notes-list-container">
          <NotesList notes={notes} onViewNote = {handleViewNote} />
        </div>
        {/* <SearchBar/> */}

        <Modal
        opened={viewModalOpened}
        onClose={handleCloseModal}
        title = {selectedNote?.title||"Note"}
        size="lg"
        >
                  {selectedNote && (
          <div>

            <p style={{ whiteSpace: 'pre-wrap', marginBottom: '1rem' }}>
              {selectedNote.content}
            </p>
            <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem' }}>
              <small style={{ color: '#666' }}>
                Created: {selectedNote.date}
              </small>
              {selectedNote.category && (
                <span style={{ marginLeft: '1rem', color: '#666' }}>
                  Category: {selectedNote.category}
                </span>
              )}
            </div>
          </div>
        )}

        </Modal>

    </>
  );
}
export default App;
