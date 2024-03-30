import { useState }from "react";
import { createPortal } from "react-dom";

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
  const [isOverlay, setIsOverlay] = useState(false);

  function toggleOverlay() {
    setIsOverlay(!isOverlay);
  }

  return (
    <>
      <div className='project-container' onClick={toggleOverlay}>
        <h2 className='project-name'>{props.name}</h2>
        <img src={props.image} alt={props.alt} className='project-img'/>
        <div className='project-description'>
            <p className='project-text'>{props.text}</p>
            <p>{props.stack}</p>
        </div>
      </div>
      {isOverlay && createPortal(
        <ProjectOverlay {...props} action={toggleOverlay}/>,
        document.body)}
    </>
  )
}

function ProjectOverlay({ action, ...props }) {
  return (
    <>
    <div className='overlay'onClick={action}/>
    <div className='overlay-container'>
      <div className='overlay-content'>
        <h2 className='project-name'>{props.name}</h2>
        <a href={props.link} target='_blank' rel='noreferrer'>
          <img src={props.image} alt={props.alt} className='project-img'/>
        </a>
        <div className='project-description'>
          <p className='project-text'>{props.text}</p>
          <p>{props.stack}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default PortfolioSection;