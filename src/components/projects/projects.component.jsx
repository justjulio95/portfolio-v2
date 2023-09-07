import { projects } from "../../data/data"

const Projects = () => {
  return (
    <div style={{ border: 'solid blue 3px' }} className="container mt-5">
      <h1 className="text-white">HELLOOOO</h1>
      <div style={{ border: 'solid blue 3px' }} className="d-flex">
        <p style={{ border: 'solid red 3px' }} className="text-white text-start">
          Below are some of the projects I've worked on. Some currently only exist on my laptop (Thanks Heroku),
          but I'm currently working on deploying the ones that need it through Netlify.
        </p>
      </div>
      <div style={{ border: 'solid blue 3px' }} className="d-md-flex flex-md-wrap justify-content-center">
        {projects.map((project) => {
          const { id, title, tech, description, image, link } = project;
          return (
            <a style={{border: 'solid red 3px', width: '32%'}} className="mw-100 mx-1">
              <img style={{width: '100%'}} src={image} className="img-fluid mx-auto my-3" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Projects