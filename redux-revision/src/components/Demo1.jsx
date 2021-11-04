import React from 'react';
import { connect } from 'react-redux';

const Demo1 = (props) => {
    console.log("from demo" , props.name);
    return (
        <div className="bg-success text-center text-white py-5" style={{height:"200px"}}>
            Demo 1

            <button onClick={props.changeName}>changeName</button>
        </div>
    );
}


function mapStateToProps(state){

    return {name:state.name}
}
function mapDispatchToProps(dispatch){

      return {

        changeName:()=> dispatch({type:"DemoChange"})
      }
}
export default connect(mapStateToProps ,mapDispatchToProps)(Demo1);
