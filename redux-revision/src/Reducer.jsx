

export function reducer (prevState  , action){
    console.log(action);
       if(action.type==="CHANGE"){
           return {
            ...prevState,
               name:prevState.name="Home"
           }
       }else if(action.type==="CHANGEABOUT"){
           return {
            ...prevState,
               name : prevState.name ="ABOUT"
           }
       }else if(action.type==="DemoChange"){

        return {
            ...prevState,
            name:prevState.name="DEMO"
        }
       }else if(action.type==="SEARCH"){
           return {
            ...prevState,
            name : prevState.name = action.payload
           }
       }else if(action.type==="MOVIES"){
          return {
            ...prevState,
            movies:action.payload
          }
       }
    return prevState;
}