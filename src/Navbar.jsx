import './Tut.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <a href='/' className='site-title'>Renato</a>
      <ul>
        <li className='active'>
          <a href='design'>Design</a>
        </li>
        <li>
          <a href='dev'>Dev</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar