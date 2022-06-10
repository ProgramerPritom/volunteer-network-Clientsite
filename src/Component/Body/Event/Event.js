import React from 'react';
import useOders from '../../../Hook/useOders';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Event.css';

const Event = () => {
    const [orders,setOrders] = useOders();
    return (
        <div className='event-book-area'>
            <h2>Your Total booked : {orders.length}</h2>
            {
                orders.map(order => <>
                    <div key={order._id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={order.img} />
                        <Card.Body>
                        <Card.Title>{order.name}</Card.Title>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                
                </>)
            }
            
        </div>
    );
};

export default Event;