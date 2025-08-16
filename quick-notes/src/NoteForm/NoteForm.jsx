import { useState } from "react";
import {CategorySelector} from "../CategorySelector/CategorySelector.jsx"
import "./NoteForm.css";

function NoteForm({ onAddNote }) {

  const DEFAULT_CATEGORY = "personal";

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [category, setCategory] = useState("personal");

  const handeleSubmit = () => {
    if (content.trim()) {
      onAddNote({ title, content, category });
      setTitle("");
      setContent("");
      setCategory("personal");
    }
  };

  return (
    <>
      <div className="input-container">
        <h1 className="form-title">Create New Note</h1>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="Title"
        />
        <textarea
          name="note-content"
          value={content}
          id="note-content"
          rows={6}
          placeholder="Your note..."
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <CategorySelector
        selectedCategory = {category}
        onCategoryChange ={setCategory}
        >Category</CategorySelector>
        <button onClick={handeleSubmit}>add</button>
      </div>
    </>
  );
}

export default NoteForm;
