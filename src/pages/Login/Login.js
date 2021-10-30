import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
}).required();

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("Name")} placeholder="your Name" />
                <p>{errors.firstName?.message}</p>

                <input type="email" {...register("Email")} placeholder="your Email" />
                <p>{errors.firstName?.message}</p>

                <input {...register("age")} />
                <p>{errors.age?.message}</p>

                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;