import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
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
      return (<div >
         <div className="Head">
            <h2>Create a New Account</h2>
         </div>
         <div className="pop">
            <div className ="pic-and-form">
               <div className ="form-style-9 in-line">
               <form onSubmit={this.handleSubmit} className ="">
                  <div className="form-group-9"  >
                     <label>
                     <input type="text" placeholder="Name" className="form-input-9" ref={(input) => this.input = input} />
                     </label>
                  </div>
                  <div className="form-group-9"  >
                     <label>
                     <input type="password" placeholder="Password" className="form-input-9" ref={(input) => this.input = input} />
                     </label>
                  </div>
                  <div className="form-group-9"  >
                     <label>
                     <input type="password" placeholder="Confirm Password" className="form-input-9" ref={(input) => this.input = input} />
                     </label>
                  </div>
                  
                  <div className= "form-group-9"  >
                     <label>
                     <input type="submit" value="Submit" className="form-input-9 submit-btn" />
                     </label>
                  </div>
               </form>
               
               <div className="go-to">
               <a href="/Login" className="form-group-9">Already Have An Account? ---></a>
               </div>
               </div>
               <div className = "picture in-line" >
                  <div class="fill">
                     <img src="https://i.imgur.com/LytRM5t.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
      )
    }
  }