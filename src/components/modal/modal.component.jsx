import { Modal } from 'react-bootstrap'

const ModalWindow = ({ show, onClose, currentProject }) => {
  const {title, description, image, link, tech, github } = currentProject;
  return (
    <Modal show={show} size='lg'>
      <Modal.Header>
        <Modal.Title style={{ border: 'solid green 3px' }} className='fs-1'>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex flex-column'>
        <div style={{ border: 'solid blue 3px' }} className='text-center'>
          <p>{description}</p>
        </div>
        <div className='d-flex justify-content-center'>
          <img style={{ width: '70vw', height: '45vh', border: 'solid red 3px' }}
            src={image}
            className="img-fluid d-block mx-2 my-3 w-auto"
          />
        </div>
        <div className='d-flex justify-content-center'>
          {
            link ? (
              <a role="button" className='mx-2 bi btn btn-secondary border border-1 rounded-5 text-light' href={link} target='_blank'>TEST</a>
            ) : (
              <p className='mx-2'>I'm working on migrating this project to Netlify. But the code can be found right here &#x2192;</p>
            )
          }
          <a role='button' className='mx-2 btn btn-secondary border border-1 rounded-5 text-light' href={github} target='_blank'>GITHUB</a>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'solid green 3px' }} className='d-flex'>
        <p style={{ border: 'solid purple 3px' }} className='col-12'>Technologies Used: {tech}</p>
        <button
          className='text-end btn btn-secondary border border-1 rounded-5 text-light'
          onClick={onClose}
        >
          CLOSE
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalWindow;