import { useState } from 'react'
import { Modal } from 'react-bootstrap'

import { projects } from "../../data/data"

const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({});

  const showModal = (data) => {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size='lg'
        centered
      >
        <Modal.Header>
          <Modal.Title style={{ border: 'solid green 3px' }}>
            {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column'>
          <div style={{ border: 'solid blue 3px' }} className='text-center'>
            <p>{data.description}</p>
          </div>
          <div className='d-flex justify-content-center'>
            <img style={{ width: '70vw', height: '60vh', border: 'solid red 3px' }}
              src={data.image}
              className="img-fluid d-block mx-2 my-3 w-auto"
            />
          </div>
          <div>
            {
              data.link ? (
                <button href={data.link} target='_blank'>TEST</button>
              ) : (
                <p>I'm working on either migrating this project to Netlify or rebuilding it altogether</p>
              )
            }
            <button>GITHUB</button>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ border: 'solid green 3px' }} className='d-flex'>
          <p style={{ border: 'solid purple 3px' }} className='col-12'>Technologies Used: {data.tech}</p>
          <button style={{ backgroundColor: 'lightgrey', borderRadius: '100px' }} className='text-end'>CLOSE</button>
        </Modal.Footer>
      </Modal>
    )
  }

  const mapped = projects.map((project, index) => {
    const { id, title, tech, description, image, link } = project;
    return (
      <>
        <img style={{ width: '45vw', height: '45vh' }}
          key={image}
          src={image}
          className="img-fluid d-block mx-2 my-3 w-auto"
          onClick={() => {
            setTempData({
              image: image,
              link: link,
              title: title,
              tech: tech,
              description: description
            });
            setModalShow(true);
          }}
        />
        <div>
          {showModal(tempData)}
        </div>
      </>
    )
  })

  // style={{ width: '32%' }}
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
    </div>
  )
}

export default Projects