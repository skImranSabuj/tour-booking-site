import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Booked from '../../componenets/Booked/Booked';

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, []);
    console.log(bookings)
    return (
        <div className="container-md">
            <h2 className="text-center pt-4 pb-2">All The Bookings</h2>
            <div className="table-responsive">
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
                            bookings.map(book => <tr>
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

export default AllBookings;