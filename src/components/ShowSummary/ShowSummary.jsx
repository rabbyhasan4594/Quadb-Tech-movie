import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';

const ShowSummary = () => {
    const [detail, setDetail] = useState([])
    const details = useLoaderData();
    // console.log(details);
    const click = useParams();
    const clickId = click.showSummary;
    // console.log(clickId);
    useEffect(() => {
        const clickShowSummary = details.find(detail => parseInt(detail.show.id) === parseInt(clickId));

        setDetail(clickShowSummary)
        console.log(clickShowSummary);
        

    }, [])
    
  
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    return (
     <div>
        
        <div className=''>
        <Card className='mx-lg-5 mb-lg-2'>
    <Card.Header className='text-center'>{detail?.show?.name}</Card.Header>
        <Card.Body>
          
          <Card.Text>
          {detail?.show?.summary.replace(/<\/?p>/g, '').replace(/<\/?b>/g, '')
}
          </Card.Text>
         <div className='text-center'>
         <Button  variant="primary" onClick={handleShow}>Book Movie Ticket</Button>

         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book Movie Ticket Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Name : </Form.Label>
              <Form.Control
              value={detail?.show?.name}
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Language : 
</Form.Label>
              <Form.Control
              value={detail?.show?.language
              }
                
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating : 
</Form.Label>
              <Form.Control
              value={detail?.show?.rating.average
              }
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Average Runtime : </Form.Label>
              <Form.Control
              value={detail?.show?.averageRuntime}
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Official Site : 
</Form.Label>
              <Form.Control
              value={detail?.show?.officialSite
              }
                
                autoFocus
              />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="primary">Book Now</Button>
        </Modal.Footer>
      </Modal>
         </div>
        </Card.Body>
      </Card>
        </div>
     </div>
    
    );
};

export default ShowSummary;