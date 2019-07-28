import React, { Component } from 'react';
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
  return (
<div className="bracket_container">


        
        <div class="bracket">
        
    
    
<section class="round quarterfinals">
        <div class="winners">
            <div class="matchups">
                <div class="matchup">
                    <div class="participants">
                        <div class="participant winner"><span>{tournament.bracket_player1}</span></div>
                        <div class="participant"><span>{tournament.bracket_player2}</span></div>
                    </div>
                </div>
                <div class="matchup">
                    <div class="participants">
                        <div class="participant"><span>{tournament.bracket_player3}</span></div>
                        <div class="participant winner"><span>{tournament.bracket_player4}</span></div>
                    </div>
                </div>
            </div>
            <div class="connector">
                <div class="merger"></div>
                <div class="line"></div>
            </div>
        </div>
        <div class="winners">
            <div class="matchups">
                <div class="matchup">
                    <div class="participants">
                        <div class="participant"><span>{tournament.bracket_player5}</span></div>
                        <div class="participant winner"><span>{tournament.bracket_player6}</span></div>
                    </div>
                </div>
                <div class="matchup">
                    <div class="participants">
                        <div class="participant"><span>{tournament.bracket_player7}</span></div>
                        <div class="participant winner"><span>{tournament.bracket_player8}</span></div>
                    </div>
                </div>
            </div>
            <div class="connector">
                <div class="merger"></div>
                <div class="line"></div>
            </div>
        </div>
    </section>
    <section class="round semifinals">
        <div class="winners">
            <div class="matchups">
                <div class="matchup">
                    <div class="participants">
                        <div class="participant winner"><span>Uno</span></div>
                        <div class="participant"><span>Dos</span></div>
                    </div>
                </div>
                <div class="matchup">
                    <div class="participants">
                        <div class="participant winner"><span>Seis</span></div>
                        <div class="participant"><span>Cinco</span></div>
                    </div>
                </div>
            </div>
            <div class="connector">
                <div class="merger"></div>
                <div class="line"></div>
            </div>
        </div>
    </section>
    <section class="round finals">
        <div class="winners">
            <div class="matchups">
                <div class="matchup">
                    <div class="participants">
                        <div class="participant winner"><span>Uno</span></div>
                        <div class="participant"><span>Seis</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
))}

 </div> 
   


      
  










     



 );
}
}


