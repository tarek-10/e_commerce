import React, { Component } from 'react';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import {Route , Redirect , Switch} from "react-router-dom"
import Home from './components/Home/Home';
class App extends Component {
  
  render() {
    return (
      <>
        <Navbar />
         <Switch>
           <Route path="/home" component={Home} />
           <Route path="/products" component={Products} />
           <Route path="/cart" component={Cart} />
           <Redirect from="/" to="/home" />
         </Switch>
      </>
    );
  }
}

export default App;
