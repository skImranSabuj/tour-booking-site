import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Booked from '../../componenets/Booked/Booked';
const axios = require('axios');

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://damp-wildwood-05961.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, []);
    const handleApprove = (id) => {
        // fetch(`https://damp-wildwood-05961.herokuapp.com/bookings/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(bookings)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             alert('Approved Successful');

        //         }
        //     });
        axios.put('https://damp-wildwood-05961.herokuapp.com/bookings', id)
            .then(res => {
                if (res.data.modifiedCount>0) {
                    alert('Added successfully');
                    // reset();
                }
            })
    }
    console.log(bookings)
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
                            bookings.map(book => <tr key={book._id}>
                                <td>{book._id}</td>
                                <td>{book.name}</td>
                                <td>{book.phone}</td>
                                <td>{book.email}</td>
                                <td>{book.status ? 'Approved' : 'Pending'}</td>
                                <td>
                                    {
                                        !book.status ? <button onClick={() => handleApprove(book._id)}
                                        > Approve</button> : 'Approved'
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>

        </div >
    );
};

export default AllBookings;