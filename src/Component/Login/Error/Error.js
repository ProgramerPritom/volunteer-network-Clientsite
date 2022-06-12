import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mx-auto'>
            <div className="right-site">
                <p>Sorry Can't find your Page!</p>
                <Button as={Link} to='/home'>Back to Home</Button>
            </div>
            <div className="left-site w-50">
                <img src='https://pbs.twimg.com/media/Dtqu4oFXQAAuoSQ.jpg' alt="" />
            </div>
        </div>
    );
};

export default Error;