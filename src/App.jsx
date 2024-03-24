// import { Component, useState } from 'react'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import Dev from './pages/Dev.jsx'
import Design from './pages/Design.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
//import './App.css'
import './Tut.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='app-container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dev' element={<Dev />} />
        <Route path='/design' element={<Design />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    </>
    )
}

export default App
