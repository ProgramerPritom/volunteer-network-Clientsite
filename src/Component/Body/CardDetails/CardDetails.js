import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useServiceDetails from '../../../Hook/useServiceDetails';

const CardDetails = () => {
    const {id} = useParams();
    const [service] = useServiceDetails(id)

    return (
        <div className='card-details d-flex justify-content-center w-50 mx-auto mt-4 py-3'>
            <div className="card-details-area">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={service.img} />
            <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                {service.description}
                </Card.Text>
                <Button variant="primary" as={Link} to={`/order/${id}`}>Go for Book</Button>
            </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default CardDetails;