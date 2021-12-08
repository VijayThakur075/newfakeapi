import { SET_TOKEN } from "../action";

const getToken= () => {
   const token= localStorage.getItem('token') || ""
   return token;
}

const intialState = {
    token: getToken()
}

const userToken = (state = intialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };

        default:
            return state;
    }
}
export default userToken;