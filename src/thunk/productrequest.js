import axios from "axios";
import { setProduct, setLocation, setTransiction, setFamilies} from "../action";

const client = axios.create({
    baseURL: 'http://localhost:8000',
});
// const gettoken=JSON.parse( localStorage.getItem('token'))

// console.log(gettoken);
const aaa= JSON.parse(localStorage.getItem('token'))
client.defaults.headers.common['Authorization'] = `Bearer ${aaa}` ;


export const requestProduct = () => async (dispatch) => {
    try {
        const response = await client.get('/products');
        dispatch(setProduct(response.data));
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const requestLocation = () => async (dispatch) => {
    try {
        const response = await client.get('/locations');
        dispatch(setLocation(response.data));
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const requestTransaction = () => async (dispatch) => {
    try {
        const response = await client.get('/transactions');
        dispatch(setTransiction(response.data));
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const requestFamily = () => async (dispatch) => {
    try {
        const response = await client.get('/families');
        dispatch(setFamilies(response.data));
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

