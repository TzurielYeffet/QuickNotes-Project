import { useState } from 'react'
import {CATEGORIES} from "../CategorySelector/CategorySelector.jsx"
import './Note.css'

function Note({ title, content, date, lastModify, category, onView, onDelete }) {
  const noteColor =  CATEGORIES[category] || CATEGORIES["personal"]
  return (
    <div className="note-container" onClick={onView} tabIndex={0} 
    style={{
      backgroundColor:noteColor.color
    }}>

      <h3 className="note-title" title={title}>
        {title}
      </h3>

      <p className="note-content" title={content}>
        {content}
      </p>

      <div className="note-dates">
        <div>{`Created: `}{date}</div>
        <div>{lastModify ? `Updated: ${lastModify}`: ""}</div>
      </div>
      {category && <div className="note-category">{category}</div>}

      <button
        className="note-delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          if (onDelete) onDelete();
        }}
        aria-label="Delete note"
      >
        &times;
      </button>
    </div>
  );
}
export default Note