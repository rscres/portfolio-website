function PortfolioSection({ projects }) {

  return (
    <section className='projects'>
    {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
    ))}
    </section>
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

export default PortfolioSection;