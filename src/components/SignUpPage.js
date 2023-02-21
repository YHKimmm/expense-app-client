import React, { useState, useEffect } from "react";
import { Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { SignUp } from "../services/authentication";
import { useDispatch } from "react-redux";
import ThirdPartySignInByGoogle from "./ThirdPartySignInByGoogle";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await SignUp(dispatch, { username, password, email });
            navigate('/');
        }
        catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="w-75 m-auto pt-4">
            <Form onSubmit={submitHandler}>
                <h4 style={{ textAlign: 'center' }}>Welcome back</h4>
                <InputGroup className="mb-3">
                    <FormControl placeholder='Username' onChange={e => setUsername(e.target.value)}></FormControl>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl placeholder='Email' onChange={e => setEmail(e.target.value)}></FormControl>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}></FormControl>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl placeholder='Confirm Password' type='password' onChange={e => setConfirmPassword(e.target.value)}></FormControl>
                </InputGroup>
                <Button type='submit' variant='success' className='m-auto w-25 d-block'
                    disabled={password !== confirmPassword || password.length <= 0}>
                    Sign Up
                </Button>
                {error && <p className='text-danger text-center'>{error}</p>}
            </Form>
            <ThirdPartySignInByGoogle className="d-block" />
        </div>
    );
};

export default SignUpPage;
