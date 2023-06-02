import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import Modal from 'react-bootstrap/Modal';
import NavBar from '../NavBar/NavBar';

const ShowSummary = () => {
    const [detail, setDetail] = useState([])
    const details = useLoaderData();
    const click = useParams();
    const clickId = click.showSummary;
    useEffect(() => {
        const clickShowSummary = details.find(detail => parseInt(detail.show.id) === parseInt(clickId));

        setDetail(clickShowSummary)
        


    }, [])



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onClick = () => {
        addToDb(detail?.show?.name);
        handleClose()

    }

    return (
        <div>
<NavBar></NavBar>

<Container>
 <div className='mt-lg-5 mt-3 mt-md-3'>
                <Card className='mx-lg-5 mb-lg-2 '>
                    <Card.Header className='text-center'>{detail?.show?.name}</Card.Header>
                    <Card.Body>

                        <Card.Text>
                            {detail?.show?.summary.replace(/<\/?p>/g, '').replace(/<\/?b>/g, '')
                            }
                        </Card.Text>
                        <div className='text-center'>
                            <Button variant="primary" onClick={handleShow}>Book Movie Ticket</Button>

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
                                            <Form.Control readOnly
                                                value={detail?.show?.name}

                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Movie Language :
                                            </Form.Label>
                                            <Form.Control readOnly
                                                value={detail?.show?.language
                                                }

                                                autoFocus
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Rating :
                                            </Form.Label>
                                            <Form.Control readOnly
                                                value={detail?.show?.rating.average
                                                }

                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Average Runtime : </Form.Label>
                                            <Form.Control readOnly
                                                value={detail?.show?.averageRuntime}

                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Official Site :
                                            </Form.Label>
                                            <Form.Control readOnly
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
                                    <Button onClick={onClick} variant="primary">Book Now</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card.Body>
                </Card>
            </div>
</Container>
           
        </div>

    );
};

export default ShowSummary;