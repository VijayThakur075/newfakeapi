import { SET_PRODUCT } from "../action";

const intialState = {
    product: [],
}

const productuser = (state = intialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.payload,
            };

        default:
            return state;
    }
}
export default productuser;