import React, { useEffect, useState } from 'react';

const useOders = () => {
    const [orders,setOrders] = useState([]);
    useEffect (() => {
        fetch('http://localhost:5000/eventbooked')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
    return [orders,setOrders]
};

export default useOders;