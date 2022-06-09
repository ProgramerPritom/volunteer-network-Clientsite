
import React from 'react';
import { Button } from 'react-bootstrap';
import './Card.css';

const Card = ({service}) => {
    return (
        <div>
            <div className="card-area">
                <img className='img-area' src={service.img} alt="" />
                <Button className='card-button'>{service.name}</Button>
            </div>
            
        </div>
    );
};

export default Card;