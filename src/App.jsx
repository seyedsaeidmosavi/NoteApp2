import "./App.css";
import AddNewNote from "./Components/AddNewNote";
import NoteList from "./Components/NoteList";
import { useState } from "react";
function App() {
    const [notes, setNotes] = useState([]);
    return (
        <div className="container">
            <div className="note-header">header</div>
            <div className="note-app">
                <AddNewNote setNotes={setNotes} />
                <div className="note-container">
                    <NoteList notes={notes} />
                </div>
            </div>
        </div>
    )
}

export default App;
