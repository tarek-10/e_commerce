import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Reducer";

let middleWare = [thunk];
let intialState ={

    name:"tarek",
    movies:[]
}




let store = createStore(reducer , intialState , applyMiddleware(...middleWare));
 
export default store ;