import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Component/Login/Loading/Loading';
import auth from '../firebase.init';

const useOders = () => {
    const [user,loading] = useAuthState(auth);
    const [orders,setOrders] = useState([]);
    const email = user.email;
   
    useEffect (() => {
        
        fetch(`https://salty-meadow-55458.herokuapp.com/eventbooked?email=${email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
    return [orders,setOrders]
};

export default useOders;