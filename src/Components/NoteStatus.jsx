function NoteStatus({ notes }) {
    const AllComplated = notes.length;
    const completedNotes = notes.filter((n) => n.completed).length;
    const OpenNotes = AllComplated - completedNotes;
    if (!AllComplated) return <h2>This is Null Notes</h2>
    return (
        <ul className="note-status">
            <li>
                All <span>{AllComplated}</span>
            </li>
            <li>
                Complated <span>{completedNotes}</span>
            </li>
            <li>Open <span>{OpenNotes}</span>
            </li>
        </ul>
    )
}

export default NoteStatus