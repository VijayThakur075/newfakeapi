import axios from "axios";
import { setUser, setLogIn, setToken } from "../action";

const client = axios.create({
    baseURL: 'http://localhost:8000',
});



export const requestUser = (userdetail) => async (dispatch) => {
    try {
        const response = await client.post('/auth/register', userdetail);
        dispatch(setUser(response.data));
        // saveTokeninLocalstorage(response.data);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const requestlogin = (selector) => async (dispatch) => {
    try {
        
        const response = await client.post('/auth/login', selector);
         dispatch(setLogIn(response.data));
      //   dispatch(setLogIn(response.data.access_token))
         //const userTok = localStorage.getItem('usertoken') || '[]';
    //      const tokendetails = JSON.parse(userTok)
    //      tokendetails.push({
    //          usertoken: (response.data.access_token)
    //      });

    //      if (response.status == 200) {
    //          localStorage.setItem('usertoken', JSON.stringify(tokendetails))
    //      } else {
    //          return console.log("unauthorized token ");
    //  }c
    

          const usertoken=JSON.stringify( response.data.access_token)
          

         const data= localStorage.setItem('token', usertoken)
          console.log(data);
    } catch (err) {
        console.log(err);
    }
}


