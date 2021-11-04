import React from 'react';
import { connect } from 'react-redux';

const About = (props) => {
    console.log("about" , props.name);
    return (
        <div className="bg-info text-center text-white py-5 " style={{height:"200px"}}>
            About
            <button onClick={props.changeName}>change name</button>
        </div>
    );
}

function mapStateToProps(state){

    return {name: state.name}
}
function mapDispatchToProps(dispatch){
   
     return {

        changeName :()=> dispatch({type:"CHANGEABOUT"})
     }

}
export default connect(mapStateToProps , mapDispatchToProps)(About);
