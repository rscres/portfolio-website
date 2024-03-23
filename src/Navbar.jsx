import { Children } from 'react'
import './Tut.css'

function Navbar() {
  const path = window.location.pathname

  return (
    <nav className='navbar'>
      <a href='/' className='site-title'>Renato</a>
      <ul>
        <CustomLink href='/dev'>Dev</CustomLink>
        <CustomLink href='/design'>Design</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ href, children,...props}) {
  const path = window.location.pathname
  return (
    <li className={path === href ? 'active' : ''}>
      <a href={href}>{children}</a>
    </li>
  )
} 

export default Navbar