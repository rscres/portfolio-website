import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='content'>
      <h1 className='hero'>Welcome to my little corner of the internet</h1>
      <p className='hero-text'>I'm a web developer and designer based in the United States. I specialize in creating beautiful, responsive websites and applications for businesses and individuals.</p>
      <Link to='/contact' className='contact-button'>Contact Me</Link>
    </div>
  )
}

export default Home