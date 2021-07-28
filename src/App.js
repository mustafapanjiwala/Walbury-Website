import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Screens/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar />
     <Switch>
      <Route exact path="/" component={Home} /> 
      <Redirect to="/" /> 
     </Switch> 
     <Footer />
    </>
  );
}

export default App;
