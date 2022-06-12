import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Order.css';
import { toast } from 'react-toastify';


import useServiceDetails from '../../../Hook/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    
    const {id} = useParams();
    const [service] = useServiceDetails(id)
    const navigate = useNavigate();
    const handleConfirm = () => {
        toast ('Successfully Event Book')
    }
    const handleOrderForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const email = user?.email;
        // console.log(name,email);
        fetch('https://salty-meadow-55458.herokuapp.com/eventbooked', {
            method: 'POST',
            body: JSON.stringify({
                name,img,email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                navigate('/home');
            });

    }
    return (
        <div className='order-area mx-auto'>
            <div className="card-area">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={service.img} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>
                {service.description}
              </Card.Text>
            </Card.Body>
          </Card>
            
            </div>
            <div className="order-form">
            <Form onSubmit={handleOrderForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" placeholder="Event Name" name='name' value={service?.name} readOnly/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Img Url</Form.Label>
                    <Form.Control type="text" placeholder="Text Url" value={service?.img} name='img' readOnly/>
                </Form.Group>
                <Button onClick={handleConfirm} variant="primary" type="submit">
                    Confirm to Book
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default Order;