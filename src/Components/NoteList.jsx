function NoteList({ notes, onDelete, onCopmlated, sortBy }) {

    let sortedNotes = notes;
    if (sortBy == "earliest") sortedNotes =
        [...notes].sort((a, b) => new Date(a.createAt) - new Date(b.createAt));

    if (sortBy == "latest") sortedNotes =
        [...notes].sort((a, b) => new Date(b.createAt) - new Date(a.createAt));

    if (sortBy == "completed") sortedNotes =
        [...notes].sort((a, b) => Number(a.completed) - Number(b.completed));

    return (
        <div className="note-list">
            {
                sortedNotes.map((note) => (
                    <NoteItem key={note.id} note={note} onDelete={onDelete} onCopmlated={onCopmlated} />
                ))
            }
        </div>
    )
}
function NoteItem({ note, onDelete, onCopmlated }) {
    const option = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    return (
        <div className={`note-item ${note.completed ? "completed" : ""}`}>
            <div className="note-item__header">
                <div>
                    <p className="title">{note.title}</p>
                    <p className="desc">{note.description}</p>
                </div>
                <div className="actions">
                    <button onClick={() => onDelete(note.id)}>🥵</button>
                    <input type="checkbox" id={note.id} name={note.id} value={note.id} onChange={onCopmlated} />
                </div>
            </div>
            <div className="note-item__footer">
                {
                    new Date(note.createAt).toLocaleDateString("en-US", option)
                }
            </div>
        </div>
    )
}


export default NoteList