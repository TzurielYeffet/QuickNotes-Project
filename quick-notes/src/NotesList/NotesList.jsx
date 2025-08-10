import Note from "../Note/Note.jsx";
import './NotesList.css'

function NotesList({ notes , onViewNote}) {
    console.log(notes);
    


  return (
    < >
        {notes.map((note,index) => (<Note
            key={note.id}
            title={note.title ==="" ? `Note ${index + 1}` : note.title}
            content={note.content}
            date={note.date}
            lastModify={note.lastModified}
            category={note.category}
            onView = {()=> onViewNote(note)}
          />
        ))}
    </>
  );
}

export default NotesList
