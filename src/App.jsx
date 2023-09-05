import "./App.css";
import AddNewNote from "./Components/AddNewNote";
function App() {
    return(
        <div className="container">
            <div className="note-header">header</div>
            <div className="note-app">
                <AddNewNote />
                <div className="note-container">notes</div>
            </div>
        </div>
    )
}

export default App;
