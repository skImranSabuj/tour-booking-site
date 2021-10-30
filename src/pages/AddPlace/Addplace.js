import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import usePlaces from '../../hooks/usePlaces';
import './AddPlace.css';

const AddPlace = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h2>Please Add a Place</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("place_name", { required: true, maxLength: 30 })} placeholder="Place Name" />
                <input {...register("country", { required: true, maxLength: 30 })} placeholder="Countey" />
                <input {...register("about", { required: true, maxLength: 30 })} placeholder="About The Place" />

                <textarea {...register("description")} placeholder="Place Description" />

                <input type="number" {...register("cost")} placeholder="Estimated Cost" />
                <input type="number" {...register("days")} placeholder="how Long (Days)" />
                <input type="number" {...register("rating")} placeholder="Rate the place out of 5" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPlace;