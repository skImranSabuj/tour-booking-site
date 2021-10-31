import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Booked from '../../componenets/Booked/Booked';
import SingleBooking from '../SingleBooking/SingleBooking';
const axios = require('axios');

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://damp-wildwood-05961.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, []);
    console.log(bookings);

    return (
        <div className="container-md py-2">
            <h2 className="text-center pt-4 pb-2">All The Bookings</h2>
            <div className="table-responsive pb-5">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(book => <SingleBooking book={book}></SingleBooking>)


                        }
                    </tbody>
                </Table>
            </div>

        </div >
    );
};

export default AllBookings;