import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/card";

const Home = ({ notes, setNotes }) => {
  const [currentNote, setcurrentNote] = useState({ title: "", desc: "", })
  const [iseditable, setIsEditable] = useState(false)
  const [editNoteData, setEditNoteData] = useState({ title: "", desc: "", id: null })

  useEffect(() => {
  document.title = "WriteUp | Home";
}, []); 

  const startEdit = (note) => {
    setEditNoteData(note)
    setIsEditable(true)
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentNote.title.length < 5) {
      alert("Title should be at least 5 characters")
      return
    }

    if (currentNote.title.length > 50) {
      alert("Title should be max 50 characters")
      return
    }

    if (currentNote.desc.length < 5) {
      alert("Description should be at least 5 characters")
      return
    }

    if (currentNote.desc.length > 1000) {
      alert("Description should be max 1000 characters")
      return
    }

    const newNote = { ...currentNote, id: Date.now() }
    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes)
    setcurrentNote({ title: "", desc: "" })
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  const onChange = (e) => {
    setcurrentNote({ ...currentNote, [e.target.name]: e.target.value })
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  const handleUpdate = (e) => {

    e.preventDefault();
    if (editNoteData.title.length < 5 || editNoteData.desc.length < 5) {
      alert("Title aur Description 5 characters se bade hone chahiye!");
      return;
    }
    const updatedNotes = notes.map((note) => {
      if (note.id === editNoteData.id) {
        return editNoteData;
      }
      return note;
    });
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setIsEditable(false);
  };

  return (
          <>
            <main>
              <h1>Create your note</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="title">Title</label>
                  <input value={currentNote.title} type="text" name="title" id="title" onChange={onChange} />
                </div>
                <div>
                  <label htmlFor="desc">Description</label>
                  <textarea value={currentNote.desc} name="desc" id="desc" onChange={onChange}></textarea>
                </div>
                <button>Submit</button>
              </form>
            </main>
            <section className='noteSection'>
              <h2>Your Notes</h2>
              <div className='container'>
                {notes.map((note) => (
                  <Card key={note.id} title={note.title} desc={note.desc} onDelete={() => deleteNote(note.id)} onEdit={() => startEdit(note)} />
                ))}
                {notes.length === 0 && <div>You haven't added any notes yet</div>}
              </div>
            </section>


            {iseditable && (
              <div className="modal-overlay">
                <div className="edit-modal">
                  <h2>Edit Your Note</h2>

                  <form onSubmit={handleUpdate}>
                    <div className="input-group">
                      <label htmlFor="edit-title">Title</label>
                      <input
                        id="edit-title"
                        type="text"
                        name="title"
                        value={editNoteData.title}
                        onChange={(e) => setEditNoteData({ ...editNoteData, title: e.target.value })}
                        required />
                    </div>

                    <div className="input-group">
                      <label htmlFor="edit-desc">Description</label>
                      <textarea
                        id="edit-desc"
                        name="desc"
                        value={editNoteData.desc}
                        onChange={(e) => setEditNoteData({ ...editNoteData, desc: e.target.value })}
                        required>
                      </textarea>
                    </div>

                    <div className="modal-buttons">
                      <button type="submit" className="update-btn">Save Changes</button>

                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => setIsEditable(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </>
  );
};
  
export default Home;