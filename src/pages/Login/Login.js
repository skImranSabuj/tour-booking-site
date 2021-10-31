import React from "react";
import { useForm } from "react-hook-form";
import './Login.css';
import * as yup from "yup";
import { Button, ButtonGroup } from "react-bootstrap";
import googleIcon from '../../images/google.png'
import useFirebase from "../../hooks/useFirebase";
import { useHistory, useLocation } from "react-router";

const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
}).required();

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { signInUsingGoogle } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const onSubmit = data => console.log(data);
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-page">
            <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Place Name:</label>
                    {/* <input {...register("place_name")} defaultValue={country} /> */}
                    <input type="number" {...register("phone")} defaultValue={880} />
                    <input {...register("email", { required: true })} placeholder="Your Email" />

                    <input type="number" {...register("cost")} placeholder="Estimated Cost" />
                    <input type="number" {...register("days")} placeholder="how Long (Days)" />
                    <input type="number" {...register("rating")} placeholder="Rate the place out of 5" />

                    <input type="submit" />
                </form>
            </div>
            <h6 className="text-center">------ or ------</h6>
            <div className="other-login">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-secondary">
                        <img src={googleIcon} alt="" />
                    </Button>
                    <Button variant="outline-secondary" onClick={handleGoogleLogin}>Log in with Google </Button>
                </ButtonGroup>
            </div>



        </div>
    );
};

export default Login;