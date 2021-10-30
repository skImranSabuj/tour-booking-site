import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import loading from '../../images/loading.gif'
import { ButtonGroup, Button } from 'react-bootstrap';
const Service = (props) => {
    const { _id, key, place_name, thumb, country, description } = props.place;
    const photoThumb = { loading };
    // thumb?:;
    return (
        <div>
            <div>
                <div className="cards">
                    <div className="photo">
                        {thumb ? <img className="card-img-top" src={thumb} alt="" /> :
                            <img className="card-img-top w-50" src={loading} alt="loading" />
                        }
                    </div>
                    <div className="card-body">

                        <h5 className="card-title">{place_name}</h5>
                        <a href="./home" className="btn btn-outline-dark btn-sm">{country ? country : 'Countey Name'}</a>
                        <p className="card-text">{description ? description : 'Description'}</p>
                        <ButtonGroup className="me-2 buttons" aria-label="Basic example">
                            <Button variant="secondary"><Link to={`/booking/${_id}`}>

                                Book Now</Link></Button>{' '}
                            <Button variant="secondary"><Link to={`/details/${_id}`}>

                                More Details</Link></Button>

                        </ButtonGroup>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;