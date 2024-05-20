import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../App.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className='header-container'>
        <Link to='/portfolio-website' className='header-name' onClick={() => setIsMenuOpen(false)}>Renato<br/>Crescenti</Link>
        <section className='header-portfolios'>
          <ul>
            <CustomLinks to='/dev'>Development</CustomLinks>
            <CustomLinks to='/design'>Design</CustomLinks>
          </ul>
        </section>
        <section className='header-about'>
          <ul>
            <CustomLinks to='/about'>About me</CustomLinks>
            <CustomLinks to='/contact'>Contact</CustomLinks>
          </ul>
        </section>
        <nav className='header-menu'>
          <button className='menu-button' onClick={toggleMenu}>
            <img src='menu.svg' alt='Menu' />
          </button>
        </nav>
      </header>
      {isMenuOpen && <Menu toggleMenu={toggleMenu}/>}
    </>
  );
}

function Menu({ toggleMenu }) {
  return (
    <nav className='mobile-menu'>
      <ul>
        <CustomLinks to='/dev' action={toggleMenu}>Development</CustomLinks>
        <CustomLinks to='/design' action={toggleMenu}>Design</CustomLinks>
        <CustomLinks to='/about' action={toggleMenu}>About</CustomLinks>
        <CustomLinks to='/contact' action={toggleMenu}>Contact</CustomLinks>
      </ul>
    </nav>
  );
}

function CustomLinks({ to, children, action}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} onClick={action}>{children}</Link>
    </li>
  );
}

export default Header;


// function Menu() {
//   return (
//     <nav>
//       <ul>
//         <CustomLinks to='/dev'>Development</CustomLinks>
//         <CustomLinks to='/design'>Design</CustomLinks>
//         <CustomLinks to='/about'>About</CustomLinks>
//         <CustomLinks to='/contact'>Contact</CustomLinks>
//       </ul>
//     </nav>
//   )
// }

// function CustomLinks({ to, children, ...props}) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
//   return (
//     <li className={isActive ? 'active' : ''}>
//       <Link to={to}>{children}</Link>
//     </li>
//   )
// }

// export default Header