function NoteList({ notes }) {
    return (
        <div className="note-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} note={note} />
                ))
            }
        </div>
    )
}
function NoteItem({ note }) {
    const option = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    return (
        <div className="note-item">
            <div className="note-item__header">
                <div>
                    <p className="title">{note.title}</p>
                    <p className="desc">{note.description}</p>
                </div>
                <div className="actions">
                    <button>🥵</button>
                    <input type="checkbox" />
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