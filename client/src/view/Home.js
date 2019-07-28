import React, { Component } from 'react';
import { Link } from "react-router-dom";



export default class Home extends Component {
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
    
    <div className="snip1376 ">
      
      
    <img src="https://images.wallpaperscraft.com/image/tom_clancy_s_rainbow_six_siege_ubisoft_montreal_ubisoft_entertainment_104024_3840x2160.jpg" alt="sample17" />
    
    <figcaption>
     
      </figcaption>
      <div className="hero-text">
    <h1 >Tournament Management</h1>
    <p>Join the millions who trust Challonge to manage their tournaments. More than 18,022,443 brackets created around the world.</p>
    <Link to="/tournament">
    <button>CREATE TOURNMENT</button>
   </Link>
    
   </div>


      <div className="Head">
   <h2>ACTIVE TOURNMENTS </h2>
  </div> 
  <div class="grid-container"> 
{tournaments.map(item => (
    
  <li className ="nobull" key ={item.id}> 
      
  <figure class="snip1360">
  <img src={item.bracket_img} alt="error" />
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
