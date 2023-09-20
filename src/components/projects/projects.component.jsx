import { useState } from 'react'
import ModalWindow from '../modal/modal.component'

import { projects } from "../../data/data"

const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentProject, setCurrentProject] = useState()
  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, index: i })
    setModalShow(!modalShow)
  }

  const mapped = projects.map((project, index) => {
    return (
      <img style={{ width: '45vw', height: '35vh' }}
        key={project.image}
        src={project.image}
        className="img-fluid d-block mx-3 my-3 w-auto"
        onClick={() => { toggleModal(project, index) }}
      />
    )
  })

  return (
    <div style={{ border: 'solid blue 3px' }} className="container mt-5">
      <h1 className="text-white">HELLOOOO</h1>
      <div style={{ border: 'solid blue 3px' }} className="d-flex">
        <p style={{ border: 'solid red 3px' }} className="text-white text-start">
          Below are some of the projects I've worked on. Some currently only exist on my laptop (Thanks Heroku),
          but I'm currently working on deploying the ones that need it through Netlify.
        </p>
      </div>
      <div style={{ border: 'solid blue 3px' }} className="d-flex flex-column flex-md-row flex-md-wrap justify-content-center">
        {mapped}
      </div>
      <div>
        {modalShow && <ModalWindow show={toggleModal} onClose={toggleModal} currentProject={currentProject} />}
      </div>
    </div>
  )
}

export default Projects