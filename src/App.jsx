import "./App.css";
import AddNewNote from "./Components/AddNewNote";
import NoteList from "./Components/NoteList";
import { useState } from "react";
import NoteStatus from "./Components/NoteStatus";
import Header from "./Components/Header";
function App() {
    const [notes, setNotes] = useState([]);
    const [sortBy, setSortBy] = useState("latest");
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
            <Header notes={notes}
                sortBy={sortBy}
                onSort={(e) => setSortBy(e.target.value)} />
            <div className="note-app">
                <AddNewNote setNotes={setNotes} />
                <div className="note-container">
                    <NoteStatus notes={notes} />
                    <NoteList notes={notes}
                        sortBy={sortBy}
                        onDelete={handleDeleteNote}
                        onCopmlated={handleComplateNote} />
                </div>
            </div>
        </div>
    )
}

export default App;
