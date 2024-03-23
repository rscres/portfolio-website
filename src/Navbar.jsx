import { Children } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Tut.css'

function Navbar() {
  const path = window.location.pathname

  return (
    <nav className='navbar'>
      <Link to='/' className='site-title'>Renato</Link>
      <ul>
        <CustomLink to='/dev'>Dev</CustomLink>
        <CustomLink to='/design'>Design</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children,...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
} 

export default Navbar