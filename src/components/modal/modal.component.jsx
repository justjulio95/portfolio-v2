import { Modal } from 'react-bootstrap'

const ModalWindow = ({ show, onClose, currentProject }) => {
  const {title, description, image, link, tech } = currentProject;
  return (
    <Modal show={show} size='lg'>
      <Modal.Header>
        <Modal.Title style={{ border: 'solid green 3px' }}>
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
              <button className='mx-2' href={link} target='_blank'>TEST</button>
            ) : (
              <p className='mx-2'>I'm working on either migrating this project to Netlify or rebuilding it altogether</p>
            )
          }
          <button className='mx-2'>GITHUB</button>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'solid green 3px' }} className='d-flex'>
        <p style={{ border: 'solid purple 3px' }} className='col-12'>Technologies Used: {tech}</p>
        <button
          style={{ backgroundColor: 'lightgrey', borderRadius: '100px' }}
          className='text-end'
          onClick={onClose}
        >
          CLOSE
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalWindow;