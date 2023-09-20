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
    <div className="container mt-5">
      <h1 className="text-white">Projects</h1>
      <div className="border border-3 rounded-top-2 border-bottom-0">
        <p className="text-white text-center fs-4">
          Below are some of the projects I've worked on.
        </p>
        <p className='text-center text-info fs-5'>
          At the moment some of these projects aren't deployed properly. I'm currently 
          in the process of migrating some of them over to Netlify.
        </p>
      </div>
      <div style={{ top: "100px"}} className="d-flex flex-column flex-md-row flex-md-wrap justify-content-center border border-3 rounded-bottom-2 border-top-0">
        {mapped}
      </div>
      <div>
        {modalShow && <ModalWindow show={toggleModal} onClose={toggleModal} currentProject={currentProject} />}
      </div>
    </div>
  )
}

export default Projects