import React, { useEffect, useState } from 'react';
const axios = require('axios');

const SingleBooking = ({ book }) => {
    const [status, setStatus] = useState('Pending');
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://damp-wildwood-05961.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, []);
    const handleApprove = (id) => {
        setStatus('Approved')
        fetch(`https://damp-wildwood-05961.herokuapp.com/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved Successful');

                }
            });

    }
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
        <tr key={book._id}>
            <td>{book._id}</td>
            <td>{book.name}</td>
            <td>{book.phone}</td>
            <td>{book.email}</td>
            <td>{status === 'Approved' ? 'Approved' : 'Pending'}</td>
            <td>
                {
                    status === 'Pending' ? <button onClick={() => handleApprove(book._id)}
                    > Approve</button> : ''
                }
                < button onClick={() => handleCancel(book._id)}>Decline Booking</button>
            </td>
        </tr>
    );
};

export default SingleBooking;