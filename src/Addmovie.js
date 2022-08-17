import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Addmovie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const namemovie=useRef()
  const imagemovie=useRef()
  const ratemovie=useRef()
  const Add=()=>{
    handleClose();
    props.setMovie([...props.movies,{
      name:namemovie.current.value,
      image:imagemovie.current.value,
      rate:ratemovie.current.value

    }

    ]

    )

    
  }
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your Favorite Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type="text" ref={namemovie} placeholder="movie name"></input>
        <input type="text" ref={imagemovie} placeholder="movie image"></input>
        <input type="text" ref={ratemovie} placeholder="movie rate"></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Add}>
            Submit
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addmovie;