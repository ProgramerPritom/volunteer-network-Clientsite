import React, { useEffect, useState } from 'react';

const useServiceDetails = (id) => {
    const [service,setService] = useState({})
    useEffect( () => {
        fetch(`http://localhost:5000/event/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[id])
    return[service]
};

export default useServiceDetails;