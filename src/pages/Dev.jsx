import './Dev.css'

function Dev() {
  return (
    <>
    <div className='content-container'>
      <h1>Development</h1>
      <section className='projects'>
        <ProjectCard 
          name='Portfolio website'
          text='The quick brown fox jumps over the lazy dog. Lorem ipsum'
          />
        <ProjectCard
          name='FdF'
          text='Graphic project for 42 cursus'
          />
        <ProjectCard
          name='Weather app'
          text='React web app'
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
      <div className='project-img'>image</div>
      {/* <img src='../assets/BG.jpg' className='project-img'></img> */}
      <div className='project-description'>
        <p className='project-text'>{props.text}</p>
      </div>
    </div>
  )
}

export default Dev