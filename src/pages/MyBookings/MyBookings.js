import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import usePlaces from '../../hooks/usePlaces';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const location = useLocation();


    const { user } = useAuth();

    useEffect(() => {
        fetch('https://damp-wildwood-05961.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, []);

    const myBookings = bookings.filter(booking => booking.email === user.email);



    const handleCancel = (id) => {
        const confirmDelete = window.confirm('Are you sure?');
        if (confirmDelete) {
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert('Deleted! Please refresh!');
                });
        }
    }

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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // myBookings.map(book => <tr>
                            myBookings.map(book => <tr>
                                <td>{book._id}</td>
                                <td>{book.name}</td>
                                <td>{book.phone}</td>
                                <td>{book.email}</td>
                                <td>{book.status ? 'Approved' : 'Pending'}</td>
                                <td>
                                    <button onClick={() => handleCancel(book._id)}>Cencel Booking</button>

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