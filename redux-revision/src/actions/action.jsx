import axios from "axios"


export function changName(){

    return (dispatch)=> dispatch({type:"CHANGE"})
}

export function getMovies(){

    return async (dispatch) =>{
    
        let {data} = await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361");

        dispatch({type:"MOVIES" , payload:data.results});

    }
}