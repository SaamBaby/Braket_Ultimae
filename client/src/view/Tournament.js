import React, { Component } from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';


// const Tournament = props => (
//     <tr>
//         <td>{props.tournament.bracket_name}</td>
//         <td>{props.tournament.bracket_date}</td>
//         <td>{props.tournament.bracket_time}</td>
        
// this.setState({tournament: response.data });
// console.log("Print data")
// console.log(response.data)

// })
//     </tr>
// )

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

  //  tournamentList() {
  //   return this.state.tournament.map(function(currenttournament, i){
  //       return <Tournament tournament={currenttournament} key={i} />;
        
  //   })
//}
render() {
  var {tournaments, isLoaded} =this.state;
  
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
   <h2> Your Tournaments</h2>
   </div> 

  
    {/* <div><ul>


    <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Tournament Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {tournaments.map(item => (
    
    <li key ={item.id}>
      {item.bracket_name} 
     
  
    </li>
  ))}
                    </tbody>
                </table>

    
    </ul></div> */}
     {tournaments.map(item => (
    
    <li key ={item.id}>
      {item.bracket_name} 
     
  
    </li>
  ))}

<div class="grid-container">  
    <div class="grid-container">
  <figure class="snip1360">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample88.jpg" alt="sample88" />
  <figcaption>
    <h2>Man loses the lotto for the second time</h2>
    <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello? </p><a href="#" class="read-more">Read More</a>
  </figcaption>
</figure>
<figure class="snip1360 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample86.jpg" alt="sample86" />
  <figcaption>
    <h2>Home sapiens feared extinct</h2>
    <p>Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's misunderstood about you? Calvin: Nobody thinks I'm a genius.</p><a href="#" class="read-more">Read More</a>
  </figcaption>
</figure>
<figure class="snip1360"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample43.jpg" alt="sample43" />
  <figcaption>
    <h2>Mondays cancelled till further notice</h2>
    <p>If you want to stay dad you've got to polish your image. I think the image we need to create for you is "repentant but learning".</p><a href="#" class="read-more">Read More</a>
  </figcaption>
</figure>
</div>
</div>
</div>

 );
}
}


