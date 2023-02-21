import React, { useState, useEffect } from "react";
import { Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { SignIn } from "../services/authentication";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ThirdPartySignInByGoogle from "./ThirdPartySignInByGoogle";

const SignInPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();


    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await SignIn(dispatch, { username, password });
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };
    console.log(error);


    return (
        <div className="w-75 m-auto pt-4">
            <Form onSubmit={submitHandler}>
                <h4 style={{ textAlign: 'center' }}>Welcome back</h4>
                <InputGroup className="mb-3">
                    <FormControl placeholder='Username' onChange={e => setUsername(e.target.value)}></FormControl>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}></FormControl>
                </InputGroup>
                <Button type='submit' variant='primary' className='m-auto w-25 d-block'>
                    Sign In
                </Button>
                {error && <p className='text-danger text-center'>{error}</p>}
            </Form>
            <ThirdPartySignInByGoogle className="d-block" />
        </div>
    );
};

export default SignInPage;
