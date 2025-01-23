import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen bg-zinc-100'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
