import axios from "axios";
import { setStatistics } from '../app/statisticsSlice';

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/statistics`,
})

axiosInstance.interceptors.request.use(config => {
    config.headers = { Authorization: `Bearer ${sessionStorage.getItem('token')}` };
    return config;
});

export const GetStatistics = async (dispatch) => {
    try {
        // api call
        const { data } = await axiosInstance.get();
        dispatch(setStatistics(data));
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            throw new Error(error.response.data);
        } else {
            throw new Error(error.message);
        }
    }
}