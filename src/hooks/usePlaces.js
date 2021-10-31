import React, { useEffect, useState } from 'react';
const axios = require('axios');

const usePlaces = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://damp-wildwood-05961.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, []);
    return places;
};

export default usePlaces;