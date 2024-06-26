import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <section className='content'>
      <h1 className='hero'>Welcome to my little corner of the internet</h1>
      <p className='hero-text'>Hello, my name is Renato Crescenti and I'm a web developer/designer based in Brazil. I specialize in creating beautiful, responsive websites and applications for businesses and individuals.</p>
      <div className="button-container">
        <Link to='/contact' className='contact-button'>Contact Me</Link>
        <Link to='/design' className='contact-button'>Design</Link>
        <Link to='/development' className='contact-button'>Development</Link>
      </div>
    </section>
  )
}

export default Home