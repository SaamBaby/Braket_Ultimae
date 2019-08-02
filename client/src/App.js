import React from 'react';

import './App.css';
import Home from '../src/view/Home';


import Tournament from '../src/view/Tournament';
// import error from '../src/view/error'
import {Route, Switch}  from 'react-router-dom';
import Create from './components/create';
import Navbar from './components/Navbar';
import Details from './components/bracketgame';
import Semifinals from './components/semifinals';






function App() {
  return (
   <>
 <Navbar></Navbar>

   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact  path="/tournament" component={Tournament}/>
   <Route exact  path="/tournament/:id" component={Details}/>
   <Route exact  path="/create-tournament" component={Create}/>
   <Route exact  path="/tournament/:id/semifinals" component={ Semifinals }/>
   
   </Switch>
   
   </>

  );
}

export default App;
