import React from 'react';
import useOders from '../../../Hook/useOders';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Event.css';
import { toast } from 'react-toastify';


const Event = () => {
    
    const [orders,setOrders] = useOders();
    
    const handleDelete = id => {
        const confirmDlt = window.confirm('Are you want to Cancel Booking');
        if (confirmDlt) {
            const url = `http://localhost:5000/eventbooked/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast ('Your Booked are Canceled successfully')
                const remaining = orders.filter(order => order._id !==id);
                setOrders(remaining);
            })
        }
    }
    return (
        <div>
            <h2 className='text-center my-3'>Your Total booked : {orders.length}</h2>
            <div className='event-book-area mx-auto my-3'>
            
            {
                orders.map(order => <>
                    <div className='order-card text-center d-flex justify-content-center mt-4' key={order._id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={order.img} />
                        <Card.Body>
                        <Card.Title>{order.name}</Card.Title>
                        <Button onClick={()=> handleDelete(order._id)} variant="primary">Cancel Booking</Button>
                        </Card.Body>
                    </Card>
                    </div>
                
                </>)
            }
            
        </div>
        </div>
    );
};

export default Event;