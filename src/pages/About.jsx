import './About.css'

function About() {
  return (
    <>
      <section className='about-container'>
        <h1 className='about-title'>About Me</h1>
        <ul className='links'>
          <li><a href='https://www.linkedin.com/in/renato-crescenti/' target='_blank' rel='noreferrer'>LinkedIn</a></li>
          <li><a href='https://github.com/rscres' target='_blank' rel='noreferrer'>GitHub</a></li>
        </ul>
        <p className='about-text'>Hello, my name is Renato Crescenti and I'm a web developer/designer based in Brazil. I specialize in creating beautiful, responsive websites and applications for businesses and individuals.</p>
        <section className='about-skills'>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>
        <div className='list-separator'></div>
        <section className='about-education'>
          <ul>
            <li>42SP</li>
            <li>Gobelins</li>
            <li>ROTC</li>
            <li>FAAP</li>
          </ul>
        </section>
        <div className='list-separator'></div>
        <section className='about-experience'>
          <ul>
            <li>TNZPV</li>
            <li>LEGO</li>
            <li>VetorZero</li>
          </ul>
        </section>
      </section>
    </>
  )
}

export default About