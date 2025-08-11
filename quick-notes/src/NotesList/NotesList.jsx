import Note from "../Note/Note.jsx";
import './NotesList.css'

function NotesList({ notes , onViewNote, onDeleteNote}) {
    console.log(notes);
    


  return (
    < >
        {notes.map((note,index) => (<Note
            key={note.id}
            title={note.title?.trim() || `Note ${notes.slice(0,index+1).filter(note=> !note.title?.trim()).length+1}`}
            content={note.content}
            date={note.date}
            lastModify={note.lastModified}
            category={note.category}
            onView = {()=> onViewNote(note)}
            onDelete = {()=>{onDeleteNote(note)}}
          />
        ))}
    </>
  );
}

export default NotesList
