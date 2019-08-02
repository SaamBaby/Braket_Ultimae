import React, { Component } from 'react';
import Form from './create';

import { Link} from "react-router-dom";





export default class TournmentDetails extends Component {

  constructor(props) {
      super(props);
      this.state = {
        tournament:[],
       }
  }

  componentDidMount() {
      fetch('http://localhost:5001/tournament/'+this.props.match.params.id)
          .then(res => res.json())
          .then(json => {this.setState({
           tournament:json,
        
          })})
        
          .catch(function (error){
              console.log(error);
          })

          
  }
  

 
render() {
 
    var {tournament} =this.state;
    var isauth 
  return (


<div className="grid-container" >


        




</div>

   


      
  










     



 );
}
}


