import React from 'react';
import { useParams } from 'react-router';

const Booked = ({ key, book }) => {
    const { _id } = useParams();
    return (
        <div className="container py-5">
            <p className="text-center pb-3">User: {book.name}</p>
        </div>
    );
};

export default Booked;