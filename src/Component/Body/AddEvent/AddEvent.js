import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddEvent.css';
const AddEvent = () => {
    return (
        <div>
            <div className="add-event-area mx-auto w-50">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Event title</Form.Label>
                <Form.Control type="text" name='name' placeholder="Event Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name='description' type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image url</Form.Label>
                <Form.Control name='img' type="text" placeholder="Event Image" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
        </div>
    );
};

export default AddEvent;