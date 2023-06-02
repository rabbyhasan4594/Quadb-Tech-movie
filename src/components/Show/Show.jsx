import React from 'react';
import { Button, Card, Container,} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Show = ({details}) => {
    console.log(details.show)
     const show =details.show;
     console.log(show);
     const {image,name,id,language,premiered}=show;
    return (
        <div className='gap-3 mx-lg-auto'>
           
           <Card className='lg:mx-auto mb-lg-2' >
                <Card.Img  variant="top" src={image.original} style={{ height: '350px' }} />
                <Card.Body>
                    <Card.Title>Movie Name : {name}</Card.Title>
                    <div>
                        <h6>Language : {language} 
                        </h6>
                        
                    </div>
                    <div>
                    <h6>Premiered : {premiered} </h6>
                    </div>
                    
                    <Link to={`/showSummary/${id}`}><Button variant="primary">Show Summary</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Show;