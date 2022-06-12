import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import useServices from '../../../Hook/useServices';
import Loading from '../../Login/Loading/Loading';
import Card from '../Card/Card';
import './VolunteerCards.css';

const VolunteerCards = () => {
    const [services,setServices] = useServices();
    return (
        <div>
            <div className="Volunteer-title">
                <h1 className="text-center text-uppercase mt-3">
                    I Grow By Helping People in Need.
                </h1>
            </div>
            <div className="search-bar mt-5 mx-auto w-50">
            <InputGroup className="mb-3">
            <FormControl
            placeholder="Search...."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button>Search</Button>
        </InputGroup>
            </div>
            
                
                <div className="Volunteer-cards-area">
                
                {
                    services == 0 ? <Loading></Loading> :
                    services.map(service => <Card key={service._id} service = {service}></Card>)
                }
            </div>
            
        </div>
    );
};

export default VolunteerCards;