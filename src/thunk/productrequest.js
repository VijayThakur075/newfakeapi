import axios from "axios";
import { setProduct, setLocation, setTransiction, setFamilies } from "../action";

const client = axios.create({
    baseURL: 'http://localhost:8000',
    
});

client.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const requestProduct = (prevFilters) => async (dispatch) => {
    try {
        const params = { _limit: prevFilters.limit, _page: prevFilters.page };
        const response = await client.get('/products', { params });
        dispatch(setProduct({ product: response.data }));
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

