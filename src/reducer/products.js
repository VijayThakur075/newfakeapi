import { SET_PRODUCT, SET_PAGE } from "../action";
import { SET_PRODUCT_PER_PAGE } from "../action";

const intialState = {
    products: {
        product: [],
        filters: { page: 1, limit: 4 }
    }
}

const productuser = (state = intialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                products: {
                    ...state.products,
                    ...action.payload,
                }
            }
        case SET_PAGE:
            return {
                ...state,
                products: {
                    ...state.products,
                    filters: {
                        ...state.products.filters,
                        ...action.payload,
                    }
                }
            }

        default:
            return state;
    }
}
export default productuser;