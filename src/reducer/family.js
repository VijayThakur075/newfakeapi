import { SET_FAMILIES } from "../action";

const intialState = {
    family: [],
}

const userFamily = (state = intialState, action) => {
    switch (action.type) {
        case SET_FAMILIES:
            return {
                ...state,
                family: action.payload,
            };

        default:
            return state;
    }
}
export default userFamily;