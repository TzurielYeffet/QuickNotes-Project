import { useState } from "react";
import "./NoteForm.css";

function NoteForm({onAddNote}) {
  const [title, setTitle] = useState("");
  // console.log(title);
  
  const [content, setContent] = useState("");
  // console.log(content);


  const handeleSubmit = () => {
    if(content.trim()){
        onAddNote({title,content})
        setTitle("");
        setContent("");
    }
  };

  return (
    <>
      <div className="input-container">
        <h1 className="form-title">Create New Note</h1>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} placeholder="Title" />
        <textarea
          name="note-content"
          value={content}
          id="note-content"
          rows={6}
          placeholder="Your note..."
          onChange={(e)=>{setContent(e.target.value)}}
        />
        <button onClick={handeleSubmit}>add</button>
      </div>
    </>
  );
}

export default NoteForm;
