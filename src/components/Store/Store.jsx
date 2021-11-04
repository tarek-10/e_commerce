import { useDebugValue } from "react";
import { createStore } from "redux";
import data from "../../store";
import { ADD_ITEM, INCREASE, REMOVE_ITEM } from "../../types";

let intialState = {
    products :[...data],
     myData:[],
  
}

function reducer(state = intialState , action){
  
  if(action.type == ADD_ITEM){
    console.log("from action" ,action.products)
    // cart = [{ ...state } ];
    // console.log('from add item ' , cart);
    // return 
    
    
    let exist = state.myData.find((elm)=>elm.id === action.products.id);
    if(exist){
      
      let cart = state.myData.map((elm)=>elm.id === exist.id ? {...exist , qty:exist.qty+1} : elm)

       state.myData = cart;
    }else{
             state.myData = state.myData.concat({...action.products , qty:1});
             let myallData=  state.myData;

             console.log("my data" , myallData);
           }
           console.log('====================================');
           console.log("exist"   , exist);
           console.log('====================================');
           
    // let total =Object.assign(state ,cart);
      
    // console.log("total ----",myallData);
    // console.log('from ---- ',action);
    
    return  { ...state}  ;

    }else if( action.type == REMOVE_ITEM ){

      let exist = state.myData.find((elm)=>elm.id === action.products.id);
      if(exist.qty >1){
        
        let cart = state.myData.map((elm)=>elm.id === exist.id ? {...exist , qty:exist.qty-1} : elm)
  
         state.myData = cart;
      }
    }
    else{
    return state
    }
}

let store = createStore(reducer)



export default store;



