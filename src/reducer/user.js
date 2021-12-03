import { SET_USER } from "../action";

const intialState = {
    userdetail: {
        eamil: "",
        password: "",
    },
}

const user = (state = intialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userdetail: action.payload,
            };

        default:
            return state;
    }
}
export default user;