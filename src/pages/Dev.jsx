import PortfolioSection from '../components/Portfolio'
import '../components/Portfolio.css'

function Dev() {
  const projects = [
    {
      name: 'FdF',
      link: 'https://github.com/rscres/42FdF',
      image: 'portfolio-website/assets/FranceXXL.gif',
      images: [
        'portfolio-website/assets/FranceXXL.gif',
        'portfolio-website/assets/BG.png',
        'portfolio-website/assets/fdf42.png',
        'portfolio-website/assets/fdf42-srcfile.png'
      ],
      alt: 'FdF',
      text: 'Graphic project for 42 cursus which creates a 3D visualisation of a map using height data',
      stack: 'Stack: C'
    },
    {
      name: 'Minishell',
      image: 'portfolio-website/assets/minishell_cover.png',
      images: [
        'portfolio-website/assets/minishell1.png',
        'portfolio-website/assets/minishell2.png',
        'portfolio-website/assets/minishell3.png',
        'portfolio-website/assets/minishell4.png'
      ],
      alt: 'Minishell',
      text: '42 cursus project aiming to recrete a simplified shell based on bash. \
          Features include built-in commands, environment variables, signal handling \
           and pipes/redirects implementation',
      stack: 'Stack: C'
    },
    // {
    //   name: 'Weather app',
    //   image: 'portfolio-website/assets/BG.png',
    //   images: [
    //     'portfolio-website/assets/BG.png'
    //   ],
    //   alt: 'Weather app',
    //   text: 'React web app',
    //   stack: 'HTML, CSS, React'
    // },
    {
    name: 'Portfolio website',
    link: 'https://github.com/rscres/portfolio-website',
    image: 'portfolio-website/assets/portfolio-website.png',
    images: [
      'portfolio-website/assets/portfolio-website.png',
      'portfolio-website/assets/about.png',
      'portfolio-website/assets/contact.png',
      'portfolio-website/assets/port-design.png',
      'portfolio-website/assets/port-modal.png'
    ],
    alt: 'Portfolio website',
    text: 'This website! A personal portfolio website built with React and hosted on GitHub Pages',
    stack: 'Stack: HTML, CSS, React'
    }
  ];

  return (
    <>
      <div className='content-container'>
        <h1>Development</h1>
        <PortfolioSection projects={projects}/>
      </div>
    </>
  )
}

export default Dev