import PortfolioSection from '../components/Portfolio'
import '../components/Portfolio.css'

function Design() {
  const projects = [
    {
    name: 'Fort Boyer beer label',
    image: 'portfolio-website/assets/FortBoyer.png',
    images: [
      'portfolio-website/assets/FortBoyer.png'
    ],
    alt: 'Fort Boyer beer label',
    text: 'Beer label design for a local brewery',
    },
    {
    name: 'Sao Gabriel beer label',
    image: 'portfolio-website/assets/SaoGabriel.png',
    images: [
      'portfolio-website/assets/SaoGabriel.png'
    ],
    alt: 'Sao Gabriel beer label',
    text: 'Beer label design for a local brewery',
    }
  ];

  return (
    <>
      <div className='content-container'>
        <h1>Design</h1>
        <PortfolioSection projects={projects}/>
      </div>
    </>
  )
}

export default Design