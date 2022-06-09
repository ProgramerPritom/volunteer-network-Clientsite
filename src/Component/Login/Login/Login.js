import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    
    return (
        <div className='login-area mx-auto'>
            <div className="login-section text-center">
                <h2 className='text-center mb-3'>Login Here</h2>
                <div className="login-google mx-auto">
                    <img className='google-logo' src="https://i.ibb.co/Lg47DK1/google-1.png" alt="" />
                    
                    <p>Continue with Google</p>
                    
                </div>
                <div className="account-create">
                    <p>Don't have an Account? 
                        <Link to='/register'> Create an account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;