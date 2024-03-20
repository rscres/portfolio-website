import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <>
      <div className='header-container'>
        <div className='header-name'>Renato Crescenti</div>
        <div className='header-links'>
          <a href='#design'>Design</a>
          <a href='#development'>Development</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <div className='app-container'>
      <Header />
      <div className='design-container' id='design'>
        <h1>Design</h1>
        <p>Some design text here</p>
      </div>
      <div className='development-container' id='development'>
        <h1>Development</h1>
        <p>Some development text here</p>
      </div>
      <div className='about-container' id='about'>
        <h1>About</h1>
        <p>Some about text here</p>
      </div>
      <div className='contact-container' id='contact'>
        <h1>Contact</h1>
        <p>Some contact text here</p>
      </div>
    </div>
  )
}

export default App
