import { SET_LOCATION } from "../action";

const intialState = {
    location: [],
}

const userLocation = (state = intialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            };

        default:
            return state;
    }
}
export default userLocation;