import axios from "axios";
import { setUser, setLogIn, setToken } from "../action";

const client = axios.create({
    baseURL: 'http://localhost:8000',
});



export const requestUser = (userdetail) => async (dispatch) => {
    try {
        const response = await client.post('/auth/register', userdetail);
        dispatch(setUser(response.data));
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const requestlogin = (selector) => async (dispatch) => {
    try {

        const response = await client.post('/auth/login', selector);
        dispatch(setLogIn(response.data));
        const usertoken = JSON.stringify(response.data.access_token)
        const data = localStorage.setItem('token', usertoken)
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}


