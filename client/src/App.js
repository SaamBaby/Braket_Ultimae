import React from 'react';

import './App.css';
import Home from '../src/view/Home';


import Tournament from '../src/view/Tournament';
// import error from '../src/view/error'
import {Route, Switch}  from 'react-router-dom';
import Create from './components/create';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Details from './components/bracket_details';
import Login from './components/Login';
import Register from './components/Register'
import { rootCertificates } from 'tls';






function App() {
  return (
   <>
 <Navbar></Navbar>

   <Switch>
   <Route exact  path="/" component={Home}/>
   <Route exact  path="/tournament" component={Tournament}/>
   <Route exact  path="/tournament/:id" component={Details}/>
   <Route exact  path="/create-tournament" component={Create}/>
   <Route exact  path="/login" component={Login}/>
   <Route exact  path="/register" component={Register}/>
   </Switch>
<Footer></Footer>
   </>

  );
}

export default App;
