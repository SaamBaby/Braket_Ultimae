import React, { Component } from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';




export default class TournmentList extends Component {

  constructor(props) {
      super(props);
      this.state = {
        tournaments:[],
       }
  }

  componentDidMount() {
      fetch('http://localhost:5001/tournaments')
          .then(res => res.json())
          .then(json => {this.setState({
            tournaments:json,
            
        
          })})
        
          .catch(function (error){
              console.log(error);
          })

          
  }

 
render() {
  var {tournaments} =this.state;
  
  return (
    <div>
    <div className="hero">
      
      
    <img src="https://images.wallpaperscraft.com/image/assassins_creed_syndicate_jacob_frye_112077_3840x2160.jpg" alt="sample17"  />
    <figcaption>
     
      </figcaption>
  <div className="hero-text">
    
    <Link to="/create-tournament">
    <button>CREATE TOURNMENT</button>
   </Link>
    
   </div>
    
  </div> 
  
   <div className="Head">
   <h2>  Tournament Dashboard</h2>
   </div> 

   
      
  
<div class="grid-container"> 
{tournaments.map(item => (
    
  <li className ="nobull" key ={item.id}> 
      
  <figure class="snip1360">
  <img src={item.bracket_img} alt="sample88" />
  <figcaption>
    <h2>{item.bracket_name} </h2>
    <p>{item.bracket_desc} </p>
    
   
    <a href={"/tournament/"+item._id} class="read-more">Go to Bracket</a>
  </figcaption>
</figure>

</li>
))}
</div>


  







     

</div>

 );
}
}


