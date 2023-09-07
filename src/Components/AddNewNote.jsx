 import { useState } from "react";

function AddNewNote({setNotes}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
         if(!title || !description) return null;
        const newNote = {
            title,
            description,
            id: Date.now(),
            complated: false,
            createAt: new Date().toISOString(),
        };

        setNotes((prevNote)=>[...prevNote , newNote]);
        setTitle("");
        setDescription("");
        console.log(newNote);
    };

    return (
        <div className="add-new-note">
            <h2>Add New Note</h2>
            <form className="note-form" onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="text-field" type="text" placeholder="UserName" />
                <input value={description} onChange={(e) => setDescription(e.target.value)} className="text-field" type="text" placeholder="Password" />
                <button type="submit" className='btn btn--primary'>Add new note</button>
            </form>
        </div>
    )
}

export default AddNewNote;