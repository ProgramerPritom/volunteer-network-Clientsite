import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import './Register.css';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegisterForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        createUserWithEmailAndPassword(email,password);
    }
    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorMsg;
    if (error) {
        errorMsg = error.message;
    }

    return (
        <div>
            <div className="register-area w-50 mx-auto">
                <h2 className=''>Register as a Volunteer</h2>
                {
            error ? 
            <p className='text-center text-danger'>Found Error: {errorMsg}</p>
            : 
            ''}
            <Form onSubmit={handleRegisterForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Full Name</Form.Label> */}
                <Form.Control className='form-handle mt-4' type="text" placeholder="Full Name" />
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control className='form-handle mt-4' type="email" name='email' placeholder="Email" />
                {/* <Form.Label>Description</Form.Label> */}
                <Form.Control className='form-handle mt-4' type="text" placeholder="Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Organize Books</Form.Label> */}
                <Form.Control className='form-handle mt-4' type="password" name='password' placeholder="Password" />
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