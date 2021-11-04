import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add_item , remove_item} from "../actions/index";
class Cart extends Component {

    getDate = ()=>{

        const {myData} = this.props.data;
 
        return myData;
    }
  
    render() {
       console.log('====================================');
       console.log("from cart" ,this.props);
       console.log('====================================');
        return (
            <>
            <div>
                <h2 className="cartItems mt-5 pt-5 text-center"> Cart Items </h2>
               
                <div className="cartItems">
                {this.getDate()== 0? <h2 className="text-center py-5 ">Cart is empty</h2> : ""}
                    
                    <hr />
                   {this.props.data.myData.map((value , index)=>{
                       return (

                        <ul key={index} className="listItems">
                        <li  className="devDetails">
                            <div className="naming">
                              <h6>{value.title}</h6>
                            </div>
                            <div className="showProducts">
                                 <p>${value.price}</p>
                                 <div className="showProductImage">
                                     <img className="w-100" src={value.image}/ >
                                 </div>
                                
                                <button className="btn btn-info" onClick={()=>this.props.add_item(value)}> + </button>
                                 <span className="px-3">{value.qty}</span>
                                 <button className="btn btn-danger" onClick= {()=>this.props.remove_item(value)}> - </button>
        
                                 <button className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                            </div>
                        </li>
                        <hr />
                    </ul>
                       )
                   })}
                </div>
            </div>
            </>
        );
    }
}

function mapStateToProps(state){

return {
  data:state
}

}
function mapDispatchToProps(dispatch){

    return{
     remove_item:(elm)=> dispatch(remove_item(elm)),
     add_item : (el )=> dispatch(add_item(el )),
    }
 }


export default connect(mapStateToProps ,mapDispatchToProps) (Cart);

