import React, { useEffect, useState } from 'react';

const useServiceDetails = (id) => {
    const [service,setService] = useState({})
    useEffect( () => {
        fetch(`https://salty-meadow-55458.herokuapp.com/event/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[id])
    return[service]
};

export default useServiceDetails;