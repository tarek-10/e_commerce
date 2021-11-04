import React from 'react';
import About from './components/About';
import Demo1 from './components/Demo1';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Switch , Route , Redirect} from "react-router-dom"
import NotFound from './components/NotFound';
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/demo" component={Demo1} />
         <Redirect exact from="/" to="/home"/>
         <Route  path="*" component={NotFound}/>   
      </Switch>
    </>
  );
}

export default App;
