import './Dev.css'

function Dev() {
  return (
    <>
    <div className='content-container'>
      <h1>Development</h1>
      <section className='projects'>
        <ProjectCard 
          name='Portfolio website'
          link='https://github.com/rscres/portfolio-website'
          image='../assets/portfolio-website.png'
          alt='Portfolio website'
          text='The quick brown fox jumps over the lazy dog. Lorem ipsum'
          stack='HTML, CSS, React'
          />
        <ProjectCard
          name='FdF'
          link='https://github.com/rscres/42FdF'
          image='../assets/FranceXXL.gif'
          alt='FdF'
          text='Graphic project for 42 cursus'
          stack='C'
          />
        <ProjectCard
          name='Weather app'
          image='../assets/BG.jpg'
          alt='Weather app'
          text='React web app'
          stack='HTML, CSS, React'
          />
      </section>
    </div>
    </>
  )
}

function ProjectCard({ ...props }) {
  return (
    <div className='project-container'>
      <h2 className='project-name'>{props.name}</h2>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <img src={props.image} alt={props.alt} className='project-img'></img>
      </a>
      <div className='project-description'>
        <p className='project-text'>{props.text}</p>
        <p>{props.stack}</p>
      </div>
    </div>
  )
}

export default Dev