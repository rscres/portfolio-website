import './About.css'

function About() {
  return (
    <>
    <section className='about-container'>
      <h1 className='about-title'>About Me</h1>
      <ul className='links'>
        <li><a href='https://www.linkedin.com/in/renato-crescenti/' target='_blank' rel='noreferrer'>LinkedIn</a></li>
        <li><a href='https://github.com/rscres' target='_blank' rel='noreferrer'>GitHub</a></li>
        <li><a href='./assets/BG.jpg' download>CV</a></li>
      </ul>
      <p className='about-text'>Hello, my name is Renato Crescenti and I'm a web developer/designer based in Brazil. I specialize in creating beautiful, responsive websites and applications for businesses and individuals.</p>
      <section className='about-skills'>
        <h2>Skills</h2>
        <ul className='list-skills'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Ruby</li>
          <li>C</li>
        </ul>
      </section>
      <div className='list-separator'></div>
      <section className='about-education'>
        <h2>Education</h2>
        <ul>
          <ListItem
            name='42SP'
            location='Sao Paulo, Brazil'
            year='2023-24'
            text='Software Engeneering Course'
          />
          <ListItem
            name='Gobelins'
            location='Annecy, France'
            year='2017-18'
            text='3D Character Animation Course'
          />
          <ListItem
            name='FAAP'
            location='Sao Paulo, Brazil'
            year='2010-15'
            text="Bachelor in Industrial Design"
          />
          <ListItem
            name='Brazilian Army ROTC'
            location='Sao Paulo, Brazil'
            year='2011'
            text='Reserve Officer Training Course'
          />
        </ul>
      </section>
      <div className='list-separator'></div>
      <section className='about-experience'>
        <h2>Work</h2>
        <ul>
        <ListItem
            name='TNZPV'
            location='Arles, France'
            year='2018-19'
            text='Junior 3D Animator'
          />
          <ListItem
            name='The LEGO Group'
            location='London, UK'
            year='2016-17'
            text='Sales Associate and Stocking Assistant'
          />
          <ListItem
            name='VetorZero'
            location='Sao Paulo, Brazil'
            year='2015-16'
            text='3D Animator'
          />
        </ul>
      </section>
    </section>
    </>
  )
}

function ListItem({ ...props }) {
  return (
    <>
    <li>
      <h3 className='item-title'>{props.name}</h3>
      <div className='item-info'>
        <p>{props.location}</p>
        <p>{props.year}</p>
      </div>
      <div className='item-body'>
        <p className='item-text'>{props.text}</p>
      </div>
    </li>
    </>
  )
}

export default About