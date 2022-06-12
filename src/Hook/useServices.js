import React, { useEffect, useState } from 'react';


const useServices = () => {
    
    const [services,setServices] = useState([]);
    
    useEffect( () => {
        fetch('https://salty-meadow-55458.herokuapp.com/addevent')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return [services,setServices];
};

export default useServices;