import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user)

    if (user) {
        navigate('/home');
    }
    if (error) {
        console.log(error)
    }

    if (loading) {
        return <Loading></Loading>
    }
    
    
    return (
        <div className='login-area mx-auto'>
            <div className="login-section text-center">
                <h2 className='text-center mb-3'>Login Here</h2>
                <div onClick={() => signInWithGoogle()} className="login-google mx-auto">
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