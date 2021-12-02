import { combineReducers } from "redux";
import user from "./user";
import login from "./loginuser";

const reducer=combineReducers({
    user,
    login,
})

export default reducer;