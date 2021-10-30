import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Service from '../../../componenets/Service/Service';
import usePlaces from '../../../hooks/usePlaces';
import loading from '../../../images/loading.gif';
import './Services.css'

const Services = () => {
    // const [places, setPlaces] = useState([]);
    const places = usePlaces();
    return (
        <div className="container">
            <h2 className="text-center py-2">Explore Places with Extour!</h2>
            <h4 className="text-center">
                {
                    places.length === 0 ? <img src={loading} alt="" className="w-25" /> : ''
                }

            </h4>

            <div className="services-container">
                {

                    places.map(place => <Service key={place._id}
                        place={place}
                    ></Service>)



                }

            </div>


        </div>
    );
};

export default Services;