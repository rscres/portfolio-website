// import { Component, useState } from 'react'
// import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import Dev from './pages/Dev.jsx'
import Design from './pages/Design.jsx'
//import './App.css'
import './Tut.css'

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = App
      break
    case "/design":
      Component = Design
      break
    case "/dev":
      Component = Dev
      break
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
    )
    {/*<div className='app-container'>
      <Header />
      <body className='body-container'>
        <div className='hero-container'>
          <h1>Welcome to my little part of the internet</h1>
          <p>Some hero text here</p>
          <a href='#contact'>Contact me</a>
        </div>
      </body>
    </div>*/}
}

export default App
