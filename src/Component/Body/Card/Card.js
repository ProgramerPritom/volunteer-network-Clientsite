
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast, } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import './Card.css';
import Loading from '../../Login/Loading/Loading';


const Card = ({service}) => {
    
    const navigate = useNavigate()
    
    const handleEventBook = (id) =>{
        navigate(`/event/${id}`);
    }
    return (
        <div>
            {
                
                <div className="card-area">
                <img className='img-area' src={service.img} alt="" />
                <Button onClick={() =>handleEventBook(service._id)} className='card-button'>{service.name}</Button>
            </div>
            }
            
        </div>
    );
};

export default Card;