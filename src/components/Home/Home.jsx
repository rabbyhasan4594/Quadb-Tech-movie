import React, { useEffect, useState } from 'react';
import Show from '../Show/Show';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';



const Home = () => {
    const [shows, setShows] = useState([])
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then((res) => res.json())
            .then((data) => {
               
                setShows(data);
            });
    }, [])


    return (
        <div>

            <NavBar></NavBar>

            <Container className='mt-5'>
                <Row>
                    <Col lg={3} md={2}>

                    </Col>
                    <Col lg={6} md={8}>
                        {
                            shows.map(details => <Show
                                key={details.show.id}
                                details={details}
                            >
                            </Show>)
                        }
                    </Col>
                    <Col lg={3} md={2}>

                    </Col>
                </Row>
            </Container>



        </div>
    );
};

export default Home;