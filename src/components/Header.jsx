import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../App.css'

function Header() {
  return (
      <>
      <header className='header-container'>
          <Link to='/' className='header-name'>Renato<br />Crescenti</Link>
            <section className='header-portfolios'>
              <ul>
                <CustomLinks to='/dev'>Development</CustomLinks>
                <CustomLinks to='/design'>Design</CustomLinks>
              </ul>
            </section>
            <section className='header-about'>
              <ul>
                <CustomLinks to='/about'>About</CustomLinks>
                <CustomLinks to='/contact'>Contact</CustomLinks>
              </ul>
            </section>
      </header>
      </>
  )
}

function CustomLinks({ to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export default Header