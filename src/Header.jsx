import './App.css'

function Header() {
  return (
      <>
      <header className='header-container'>
          <div className='header-name'>Renato<br />Crescenti</div>
          <div className='header-links'>
            <div className='header-portfolios'>
              <a href='#design'>Design</a>
              <a href='#development'>Development</a>
            </div>
            <div className='header-about'>
              <a href='#about'>About</a>
              <a href='#contact'>Contact</a>
            </div>
          </div>
      </header>
      </>
  )
}

export default Header