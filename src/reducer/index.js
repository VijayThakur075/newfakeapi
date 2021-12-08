import { combineReducers } from "redux";
import user from "./user";
import login from "./loginuser";
import productuser from "./products";
import userLocation from "./location";
import transictionuser from "./transiction"
import userFamily from "./family";
import userToken from "./token";

const reducer=combineReducers({
    user,
    login,
    productuser,
    userLocation,
    transictionuser,
    userFamily,
    userToken,
})

export default reducer;