import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Profile from './pages/Profile'
import Feed from './pages/Feed'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signin from './pages/Signin'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="min-h-screen bg-zinc-100 font-varela">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      {/* <Footer /> */}
    </div>
  )
}

export default App
