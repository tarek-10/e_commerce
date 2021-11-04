import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add_item, increase_item} from "../actions/index"


class Home extends Component {

    getDate = ()=>{

        const {products} = this.props.data;
 
        return products;
    }
 
    render() {
      console.log(this.props);
        return (
            <>
                
                    <div className="row text-center mt-4 pt-4">
                       {this.props.data.products.map((value , index)=>{
                        return (

                            <div key={value.id} className="col-md-4">
                              <div className="items">
                                  <div className="item-image">
                                  <img height="350" src={value.image}  className="w-100 py-4"/>
                                  </div>
                                  <div className="cartTitle">
                                      <h6 className="py-4">{value.title}</h6>
                                      <span>${value.price}</span>
                                  </div>
                                   <button onClick={()=>this.props.add_item(value )
                                                    
                                                   
                                  }
                                           
                                   className="btn btn-success text-white w-100">Add To Cart</button>
                              </div>
                            </div>
                        )
                       })}
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
    add_item : (el )=> dispatch(add_item(el ))
  
   }
}
export default connect(mapStateToProps , mapDispatchToProps) (Home)
