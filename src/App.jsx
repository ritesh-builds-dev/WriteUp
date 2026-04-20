import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import './App.css'
import { useEffect, useState } from "react"


function App() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
     const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home notes={notes} setNotes={setNotes} />} />
      <Route path="/about" element={<About totalNotes={notes.length} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
