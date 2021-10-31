import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/usecart';
import usePlaces from '../../hooks/usePlaces';
import { addToDb, getStoredCart } from '../../localStorage/tempDb';

const Booking = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [cart, setCart] = useCart();
    const [place, setPlace] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/places/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data));
    }, []);

    const { place_name, key, description, days, about, thumb, country, rating, cost } = place;

    const onSubmit = data => {
        // save to local storage (for now)
        addToDb(place._id);

        console.log(data, place);
        const exists = cart.find(pd => pd._id === place._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== place._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, place];
            alert('Added to cart, had before');
        }
        else {
            place.quantity = 1;
            newCart = [...cart, place];
            alert('Added to cart, new place');
        }
        setCart(newCart);
        console.log('Cart: ', cart);
        const savedCart = getStoredCart();
        data.bookings = savedCart;
        console.log('Updated data: ', data)
        axios.post('http://localhost:5000/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            < h2 className="text-center"> Book and confirm your Trip</h2 >
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Place Name:{place_name}</label>
                <input {...register("name")} defaultValue={user.email ? user.displayName : 'Your Name'} />
                <input type="number" {...register("phone")} defaultValue={880} />
                <input {...register("email", { required: true })} defaultValue={user.email ? user.email : 'Your Email'} />

                <input type="submit" />
            </form>
        </div >
    );
};

export default Booking;