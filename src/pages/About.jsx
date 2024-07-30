import './About.css'

function About() {
  return (
    <>
    <section className='about-container'>
      <h1 className='about-title'>About Me</h1>
      <div className='about-content'>
        <ul className='links'>
          <li><a href='https://www.linkedin.com/in/renato-crescenti/' target='_blank' rel='noreferrer'>
            <img src='portfolio-website/assets/linkedin.png' alt='Linkedin logo'/></a>
          </li>
          <li><a href='https://github.com/rscres' target='_blank' rel='noreferrer'>
            <img src='portfolio-website/assets/github.png' alt='Github logo'/></a>
          </li>
          {/* <li><a href='/assets/BG.jpg' download>
            <img src='assets/cv.png' alt='cv icon'/></a>
          </li> */}
        </ul>
        <p className='about-text'>I'm a multifaceted professional with international experience in 3D animation and sales, currently honing my skills in Software Engineering at 42 São Paulo. With a degree in Industrial Design and specialised courses in character animation, I have a strong technical background in programming (C/C++, Java, Ruby, JavaScript, ReactJS, Linux) and design/3D (Blender, Autodesk Maya, Unreal Engine, Adobe Suite). My career is characterised by adaptability and a deep interest in technology, sports and the arts. I speak Portuguese, English and French.</p>
        <section className='about-skills'>
          <h2>Skills</h2>
          <ul className='list-skills'>
            <li><img src='portfolio-website/assets/html.png' alt='html5 logo'/></li>
            <li><img src='portfolio-website/assets/css.png' alt='css logo'/></li>
            <li><img src='portfolio-website/assets/js.png' alt='javascript logo'/></li>
            <li><img src='portfolio-website/assets/react.png' alt='react logo'/></li>
            <li><img src='portfolio-website/assets/ruby.png' alt='ruby logo'/></li>
            <li><img src='portfolio-website/assets/c.png' alt='c logo'/></li>
          </ul>
        </section>
        <div className='list-separator'/>
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
        <div className='list-separator'/>
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
      </div>
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