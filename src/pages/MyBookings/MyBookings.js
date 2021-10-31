import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import usePlaces from '../../hooks/usePlaces';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [myBook, setMyBook] = useState([]);
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
    // setMyBook(myBookings);
    console.log('myBookings:', myBookings);
    // console.log('myBook:', myBook);
    // const myPlaceId = [];
    // myBookings.map(booking => myPlaceId.push(Object.keys(booking.bookings)))
    // const myPlaceId = Object.keys(myBookings?.bookings);
    // const myPlaces = places.filter(places => places._id === myBookings.bookings?.keys());
    // console.log('myPlaces', myPlaceId);


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
                    alert('deleted!')
                    // if (data.deletedCount) {
                    //     const remaingMyBookings = myBook.filter(data => data._id !== id);
                    //     setMyBook(remaingMyBookings)
                    // }
                })
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
                                    <button onClick={() => handleCancel(book._id)}>Cencel</button>

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