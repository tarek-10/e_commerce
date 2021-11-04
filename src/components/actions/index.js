import { ADD_ITEM, REMOVE_ITEM } from "../../types";


export const add_item = (value )=>{
  
    //    const action = {
    //        type:ADD_ITEM,
    //        products:value
    //     }
        // return action
        return {type:ADD_ITEM , products:value}
}

export const remove_item = (value)=>{

    return {type:REMOVE_ITEM , products:value}
}
