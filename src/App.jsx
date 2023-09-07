import "./App.css";
import AddNewNote from "./Components/AddNewNote";
import NoteList from "./Components/NoteList";
import { useState } from "react";
import NoteStatus from "./Components/NoteStatus";
function App() {
    const [notes, setNotes] = useState([]);

    const handleDeleteNote = (id) => {
        const filteredNote = notes.filter((n) => n.id !== id);
        setNotes(filteredNote);
    }

    const handleComplateNote = (e) => {
        const noteId = Number(e.target.value);
        setNotes((prevent) => prevent.map((note) => note.id === noteId ? { ...note, completed: !note.completed } : note));
    }

    return (
        <div className="container">
            <div className="note-header">header</div>
            <div className="note-app">
                <AddNewNote setNotes={setNotes} />
                <div className="note-container">
                    <NoteStatus notes={notes} />
                    <NoteList notes={notes}
                        onDelete={handleDeleteNote}
                        onCopmlated={handleComplateNote} />
                </div>
            </div>
        </div>
    )
}

export default App;
