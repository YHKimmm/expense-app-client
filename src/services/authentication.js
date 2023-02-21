import axios from "axios";
import { userAuthenticated } from "../app/authenticationSlice";

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/Auth`,
})

export const SignUp = async (dispatch, credentials) => {
    try {
        // api call
        const { data } = await axiosInstance.post('/signup', credentials);
        dispatch(userAuthenticated(data));
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            throw new Error(error.response.data);
        } else {
            throw new Error(error.message);
        }
    }
}

export const SignIn = async (dispatch, credentials) => {
    try {
        const { data } = await axiosInstance.post('/signin', credentials);
        console.log(data);
        dispatch(userAuthenticated(data));
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            throw new Error(error.response.data);
        } else {
            throw new Error(error.message);
        }
    }
};

export const ThirdPartySignIn = async (dispatch, token) => {
    try {
        // api call
        const { data } = await axiosInstance.post(`/google?token=${token}`);
        console.log(data);
        dispatch(userAuthenticated(data));
    } catch {
        console.log('Error');
    }
}