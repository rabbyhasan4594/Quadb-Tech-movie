import React, { useEffect, useState } from 'react';
import Show from '../Show/Show';
import { Col, Container, Row } from 'react-bootstrap';



const Home = () => { 
    const[shows,setShows]=useState([])
    useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setShows(data);       
        });
}, [])


    return (
        <div>



<Container className='mt-5'>
                <Row>
                <Col lg={3}>
                       
                    </Col>
                    <Col lg={6}>
                    {
                  shows.map(details => <Show
                    key={details.show.id}
                    details={details}
                  >
                  </Show>)
                }
                    </Col>
                    <Col lg={3}>
                       
                    </Col>
                </Row>
            </Container>
            
            
            
        </div>
    );
};

export default Home;