import { SET_TRANSICTION } from "../action";

const intialState = {
    transaction: [],
}

const transictionuser = (state = intialState, action) => {
    switch (action.type) {
        case SET_TRANSICTION:
            return {
                ...state,
                transaction: action.payload,
            };

        default:
            return state;
    }
}
export default transictionuser;