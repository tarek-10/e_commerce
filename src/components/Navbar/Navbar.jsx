import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux';
import {add_item} from "../actions/index"
class Navbar extends Component {
    getDate = ()=>{

        const {myData} = this.props.data;
 
        return myData
    }
 
    render() {
        console.log('====================================');
        console.log("navbar",this.props);
        console.log('====================================');
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="container">
                  <NavLink className="navbar-brand" to="/home">StoreApp</NavLink>
                    <NavLink className="nav-link homeLink" to="/home">Home </NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                                <NavLink className="nav-link cart color-white" to="/cart">$00.00</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link cart color-white" to="/cart">cart</NavLink>
                            </li>
                            <li className="nav-item postion-relative">
                                <NavLink className="nav-link cart color-white" to="/cart"><i className="fas fa-shopping-cart"></i>
                                </NavLink>
                                <span className="badge badge-info py-2 px-2 badgeIcon color-white">0</span>
                            </li>


                        </ul>

                    </div>
                  </div>
                </nav>       
             </>
        );
    }
}

function mapStateToProps(state){

    return {
      data:state
    }
  
  }
  
 
  export default connect(mapStateToProps , null) (Navbar)

