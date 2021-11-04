import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { changName , getMovies } from '../actions/action';

const Home = (props) => {

    function getMovies(){

        props.getMovies();
    }
    useEffect(()=>{
        getMovies();
    },[])
    console.log("from home" ,props);
    return (
        <div className="bg-danger text-center text-white py-5 " style={{height:"200px"}}>
            Home

            <button onClick={props.changName}> Change Name </button>
        </div>
    );
}

function mapStateToProps(state){
  
     return {name : state.name,movies:state.movies}

}

// function mapDispatchToProps(dispatch){
 
//      return {

//         changName:()=> dispatch({type:"CHANGE"})
//      }

// }

export default connect(mapStateToProps , {changName , getMovies})(Home);
