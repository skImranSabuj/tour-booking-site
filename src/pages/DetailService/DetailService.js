import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import usePlaces from '../../hooks/usePlaces';
import loading from '../../images/loading.gif'
// import { places } from '../Data';
const DetailService = () => {
    const [place, setPlace] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/places/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data));
    }, []);
    console.log('from details', place);
    const { place_name, description, days, about, thumb, country, rating, cost } = place;
    return (
        <div className="container py-5">
            <h2 className="text-center pb-3">Know More About Yor Destination!</h2>
            {/* <img src={loading} alt="" /> */}
            <div className="card mb-3">
                {
                    !place_name ?
                        <img src={loading} alt="" className="w-25" />
                        :
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={thumb} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">{place_name}</h2>
                                    <h4>{about}</h4>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted">Starting from {cost}</small></p>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
};

export default DetailService;