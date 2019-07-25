import React from 'react';

import './App.css';
import Home from '../src/view/Home';

import Tournament from '../src/view/Tournament';
import error from '../src/view/error'
import {Route, Switch}  from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
   <>
 <Navbar></Navbar>

   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact  path="/tournament" component={Tournament}/>
   <Route exact  path="/tournament/:id" component={Tournament}/>
   
   </Switch>

   </>

  );
}

export default App;
