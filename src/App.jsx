import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import './App.css'
import { useEffect, useState } from "react"

// for the main app component which will render the navbar and also the routes for home and about page

function App() {
  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BrowserRouter>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home
          notes={filteredNotes}
          setNotes={setNotes}
          searchTerm={searchTerm}
          totalNotesCount={notes.length}
        />} />
        <Route path="/about" element={<About totalNotes={filteredNotes.length} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
