import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../../services/authentication";
import ThirdPartySignInByGoogle from "../ThirdPartySignInByGoogle";

const SignInPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await SignIn(dispatch, { username, password });
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const clickHandler = () => {
        navigate("/signup");
    };

    return (
        <div>
            <div className="mt-10 sm:mt-0 max-w-xl mx-auto">
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <form onSubmit={submitHandler}>
                                <div className="grid grid-cols-1 gap-y-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="Username">
                                            Username
                                            <input
                                                className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Password
                                            <input
                                                className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-400 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className="mt-6">
                                    <ThirdPartySignInByGoogle />
                                </div>
                            </form>
                            <div className="py-2 mt-4 text-sm font-medium">
                                <div className="flex flex-col items-start">
                                    <div>
                                        <span className="pr-1">Don't have an account?</span>
                                        <button
                                            onClick={clickHandler}
                                            className="text-purple-600 transition-colors duration-200 transform hover:underline"
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {errorMessage && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold mr-1">Error!</strong>
                                <span className="block sm:inline">{errorMessage}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;