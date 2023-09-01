const Header = () => {
  return (
    <div className='div-border sticky-lg-top bg-secondary d-flex flex-column flex-sm-column flex-md-row'>
      <h1 className='h1-border mx-5 text-white text-center'>Julio Suarez</h1>
      <nav className='nav-border d-flex mx-3 justify-content-between'>
        <p className='h3-border fs-4 text-center mt-auto mx-3 mx-sm-3 mx-md-3'>
          <a href="#about" role="button" className="link-underline-opacity-0 link-opacity-75-hover link-light">
            About Me
          </a>
        </p>
        <p className='h3-border fs-4 text-white text-center mt-auto mx-3 mx-sm-3 mx-md-3'>
          <a href="#projects" role="button" className="link-underline-opacity-0 link-opacity-75-hover link-light">
            Projects
          </a>
        </p>
        <p className='h3-border fs-4 text-white text-center mt-auto mx-3 mx-sm-3 mx-md-3'>
          <a href="#contact" role="button" className="link-underline-opacity-0 link-opacity-75-hover link-light">
            Contact Me
          </a>
        </p>
      </nav>
      <div className='div-border2 d-flex ms-2 me-2 justify-content-between ms-md-auto'>
        <img src='' alt='test' />
        <img src='' alt='test' />
        <img src='' alt='test' />
      </div>
    </div>
  )
}

export default Header;