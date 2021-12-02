import {SET_LOGIN} from "../action";

const intialState={
   logindetail:{
       eamil:"",
       password:"",
   },
}

const login=(state = intialState, action)=>{
    switch(action.type){
        case SET_LOGIN:
            return{
                ...state,
               logindetail: action.payload,
            };
        
        default : 
            return state;
    }
}
export default login ;