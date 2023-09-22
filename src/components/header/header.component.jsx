import GitHubMark from '../../assets/github-mark.svg'
import LinkedIn from '../../assets/linkedin-svgrepo.svg'

const Header = () => {
  return (
    <div className='sticky-lg-top bg-secondary d-flex flex-column flex-sm-column flex-md-row'>
      <a href='#' role='button' className='link-underline-opacity-0 link-light mx-5 fs-2'>Julio Suarez</a>
      <nav className='d-flex mx-3 mt-2 justify-content-between'>
        <p className='fs-4 text-center mx-3 mx-sm-3 mx-md-3'>
          <a href="#about" role="button" className="link-underline-opacity-0 link-opacity-75-hover link-light">
            About Me
          </a>
        </p>
        <p className='fs-4 text-white text-center mt-auto mx-3 mx-sm-3 mx-md-3'>
          <a href="#projects" role="button" className="link-underline-opacity-0 link-opacity-75-hover link-light">
            Projects
          </a>
        </p>
        <p className='fs-4 text-white text-center mt-auto mx-3 mx-sm-3 mx-md-3'>
          <a href="#contact" role="button" className="link-underline-opacity-0 link-opacity-75-hover link-light">
            Contact Me
          </a>
        </p>
      </nav>
      <div className='d-flex mx-2 mt-1 justify-content-between ms-md-auto'>
        <a className='mx-3' href='https://github.com/justjulio95' target='_blank'>
          <img style={{ width: '50px' }} role='button' src={GitHubMark} alt='github'/>
        </a>
        <a className='mx-3' href='https://www.linkedin.com/in/julio-suarez95/' target='_blank'>
          <img style={{ width: '52px' }} role='button' src={LinkedIn} alt='linkedIn'/>
        </a>
      </div>
    </div>
  )
}

export default Header;