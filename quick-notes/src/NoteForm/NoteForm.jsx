import { useState } from "react";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <div>
        <input type="text" value={title}></input>
        <textarea name="note-content" id="note-content"></textarea>
        <button>add</button>
      </div>
    </>
  );
}
