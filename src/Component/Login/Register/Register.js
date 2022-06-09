import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Register.css';

const Register = () => {
    return (
        <div>
            <div className="register-area w-50 mx-auto">
                <h2 className=''>Register as a Volunteer</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Full Name</Form.Label> */}
                <Form.Control className='form-handle mt-4' type="text" placeholder="Full Name" />
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control className='form-handle mt-4' type="email" placeholder="Email" />
                {/* <Form.Label>Description</Form.Label> */}
                <Form.Control className='form-handle mt-4' type="text" placeholder="Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Organize Books</Form.Label> */}
                <Form.Control className='form-handle mt-4' type="text" placeholder="Organize Books" />
            </Form.Group>
            <Button className='form-btn' variant="primary" type="submit">
                Registration
            </Button>
            </Form>
            </div>
        </div>
    );
};

export default Register;