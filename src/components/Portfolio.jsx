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
  const [isModalOpen, setIsModal] = useState(false);

  function toggleModal() {
    setIsModal(!isModalOpen);
  }

  return (
    <>
      <div className='project-container' onClick={toggleModal}>
        <h2 className='project-name'>{props.name}</h2>
        <img src={props.image} alt={props.alt} className='project-img'/>
        <div className='project-description'>
            <p className='project-text'>{props.text}</p>
            <p>{props.stack}</p>
        </div>
      </div>
      {isModalOpen && createPortal(
        <ProjectModal {...props} action={toggleModal}/>,
        document.body)}
    </>
  )
}

function ProjectModal({ action, ...props }) {
  return (
    <>
    <div className='modal'onClick={action}/>
    <div className='modal-container'>
      <div className='modal-content'>
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