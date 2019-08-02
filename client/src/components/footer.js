import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";

 
 export default class NameForm extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      alert('The value is: ' + this.input.value);
      e.preventDefault();
    }
  
    render() {
      return (
      
      <div >
         <footer class="footer-distributed">

<div class="footer-right">

   <a href="#"><i class="fa fa-facebook"></i></a>
   <a href="#"><i class="fa fa-twitter"></i></a>
   <a href="#"><i class="fa fa-linkedin"></i></a>
   <a href="#"><i class="fa fa-github"></i></a>

</div>

<div class="footer-left">

   <p class="footer-links">
      
   <NavLink activeClassName="active" to="/">
      Home  |
   </NavLink>
   <NavLink activeClassName="active" to="/tournament">
      | Tournament |
   </NavLink>
   <NavLink activeClassName="active" to="/Login">
      | Login ||
   </NavLink>
   </p>

   <p>Bracket ulitamae &copy; 2018</p>
</div>

</footer>
      </div>
      )
    }
  }