import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import usePlaces from '../../hooks/usePlaces';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    // const [places, setPlaces] = useState([]);
    const { user } = useAuth();
    const places = usePlaces();
    // useEffect(() => {
    //     fetch('https://damp-wildwood-05961.herokuapp.com/places')
    //         .then(res => res.json())
    //         .then(data => setPlaces(data));
    // }, []);
    useEffect(() => {
        fetch('https://damp-wildwood-05961.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, []);

    const myBookings = bookings.filter(booking => booking.email === user.email);
    console.log('myBookings:', myBookings);
    const myPlaceId = [];
    myBookings.map(booking => myPlaceId.push(Object.keys(booking.bookings)))
    // const myPlaceId = Object.keys(myBookings?.bookings);
    // const myPlaces = places.filter(places => places._id === myBookings.bookings?.keys());
    console.log('myPlaces', myPlaceId);
    return (
        <div className="container-md py-2">
            <h2 className="text-center pt-4 pb-2">My Bookings:</h2>
            <div className="table-responsive pb-5">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookings.map(book => <tr>
                                <td>{book._id}</td>
                                <td>{book.name}</td>
                                <td>{book.phone}</td>
                                <td>{book.email}</td>
                                <td>
                                    <button>{book.status ? 'Approved' : 'Pending'}</button>
                                    <button>Cencel</button>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default MyBookings;