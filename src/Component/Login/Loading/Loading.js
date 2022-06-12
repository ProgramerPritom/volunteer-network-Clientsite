import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className=''>
            <div style={{height :"600px"}} className="spinner-area d-flex justify-content-center align-items-center w-100">
           <Spinner animation="grow" variant="success" />
           </div>
        </div>
    );
};

export default Loading;