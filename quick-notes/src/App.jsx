import { useState } from "react";
import { Modal, Textarea, TextInput, Button } from "@mantine/core";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NoteForm from "./NoteForm/NoteForm.jsx";
import NotesList from "./NotesList/NotesList.jsx";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [viewModalOpened, setViewModalOpened] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editedFiled, setEditedFiled] = useState(null);

  const [editedTitle, setEditTitle] = useState("");
  const [editedContent, setEditContent] = useState("");
  const [toBeDeleted,setOnDelete] = useState(false);



const handleOnDelete = (note)=>{
    const newNotes = notes.filter(item => item.id !== note.id)
    setNotes(newNotes)
}

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
    setEditTitle(note.title);
    setEditContent(note.content);
    setEditedFiled(null);
  };

  const handleCloseModal = () => {
    setViewModalOpened(false);
    setSelectedNote(null);
  };

  const handleFiledEdit = (field) => {
    setEditedFiled(field);
  };

  const handleSaveEdit = (field) => {
    const updatedNote = {
      ...selectedNote,
      title: editedTitle,
      content: editedContent,
      lastModified: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    setSelectedNote(updatedNote);
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setEditedFiled(null);
    setViewModalOpened(false)
  };

  return (
    <>
      <div className="form-container">
        <NoteForm onAddNote={addNote} />
      </div>

      <div className="notes-list-container">
        <NotesList notes={notes} onViewNote={handleViewNote} onDeleteNote={handleOnDelete} />
      </div>
      {/* <SearchBar/> */}

      <Modal
        opened={viewModalOpened}
        onClose={handleCloseModal}
        title={selectedNote?.title || "Note"}
        size="sm"
      >
        {selectedNote &&
          (editedFiled === "title" ? (
            <div>
              <TextInput
                value={editedTitle}
                onChange={(e) => setEditTitle(e.currentTarget.value)}
                autoFocus
              />
            </div>
          ) : (
            <div
              onClick={() => {
                handleFiledEdit("title");
              }}
            >
              <div style={{ whiteSpace: "pre-wrap", marginBottom: "1rem" }}>
                {selectedNote?.title || "Edit title..."}
              </div>
            </div>
          ))}
        {selectedNote && editedFiled === "content" ? (
          <div>
            <Textarea
              value={editedContent}
              onChange={(e) => {
                setEditContent(e.currentTarget.value);
              }}
              rows={6}
              autoFocus
            />
          </div>
        ) : (
          <div onClick={() => handleFiledEdit("content")}>
            <p style={{ whiteSpace: "pre-wrap", marginBottom: "1rem" }}>
              {selectedNote?.content || ""}
            </p>
          </div>
        )}
        <div>
          <Button
          onClick={handleSaveEdit} style={{width:"100%"}}>Update</Button>
        </div>



        <div style={{ borderTop: "1px solid #eee", paddingTop: "1rem" }}>
          <small style={{ color: "#666" }}>
            Created: {selectedNote?.date}
            {selectedNote?.lastModified &&
              ` Last modified: ${selectedNote?.lastModified}`}
          </small>
        </div>
          <div>
            {selectedNote?.category && (
              <span style={{ marginLeft: "1rem", color: "#666" }}>
                Category: {selectedNote?.category}
              </span>
            )}
          </div>
      </Modal>
    </>
  );
}
export default App;
