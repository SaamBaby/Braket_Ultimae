import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";

 
 export default class NameForm extends Component {
    constructor(props) {
      super(props);
      this.onChangeusername = this.onChangeusername.bind(this);
      this.onChangepassword = this.onChangepassword.bind(this);
      this.onChangeemail = this.onChangeemail.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        username: '',
        email: '',
        password: '',}
    }
  
    onChangeusername(e) {
      this.setState({
         username: e.target.value
      });
  }

  onChangepassword(e) {
      this.setState({
         password: e.target.value
      });
  }
  onChangeemail(e) {
   this.setState({
      email: e.target.value
   });
}
  

// submitt button

    onSubmit(e) {
      e.preventDefault();
      
      console.log(`Form submitted:`);
     
     
      const user = {
      email:  this.state.password,
       username : this.state.username,
       password :  this.state.password,
       
     
         
  
         
      };
           axios.post('https://fast-hamlet-62898.herokuapp.com/register',user)
        .then(res => {
          console.log(res);
          console.log(res.data);
          
          
          
        })
        .catch(function(error){
  
  console.log(error);
        })
      

        this.setState({
         email :  '',     
       username: '',
        password: '',

      })
   }
    render() {
      return (

        <div >
        <div className="Head">
           <h2>Register</h2>
        </div>
        <div className="pop">
           <div className ="pic-and-form">
              <div className ="form-style-9 in-line">
              <form onSubmit={this.onSubmit} className ="">

              <div className="form-group-9"  >
                    <label>
                    <input type="text" placeholder="Email" className="form-input-9" value={this.state.email}
                    onChange={this.onChangeemail} ref={(input) => this.input = input} />
                    </label>
                 </div>
                 <div className="form-group-9"  >
                    <label>
                    <input type="text" placeholder="UserName" className="form-input-9" value={this.state.username}
                    onChange={this.onChangeusername} ref={(input) => this.input = input} />
                    </label>
                 </div>
 

               <div className="form-group-9"  >
                    <label>
                    <input type="password" placeholder="Password" className="form-input-9"  value={this.state.password}
                    onChange={this.onChangepassword}  ref={(input) => this.input = input} />
                    </label>
                 </div>
                 
                 <div className= "form-group-9"  >
                    <label>
                    <input type="submit" value="Submit" className="form-input-9 submit-btn" />
                    </label>
                 </div>
              </form>
              
              <div className="go-to">
              <a href="/Register" className="form-group-9">Log into your Account ---></a>
              </div>
              </div>
              <div className = "picture in-line" >
                
                  
                 <div class="fill">
                    <img src="https://i.imgur.com/oKHoRod.png" alt="" className="fill"/>
                 </div>
              </div>
           </div>
        </div>
     </div>
      )
    }
  }