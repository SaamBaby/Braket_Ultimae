import React, { Component } from 'react';
import Form from './create';
import axios from 'axios';
import { Link} from "react-router-dom";





export default class TournmentDetails extends Component {

  constructor(props) {
      super(props);
      this.onChangesemifinal_winner1 = this.onChangesemifinal_winner1.bind(this);
      this.onChangesemifinal_winner2 = this.onChangesemifinal_winner2.bind(this);
      
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        tournament:[],
       semifinal_winner1: '',
       semifinal_winner2: ''
      
       }
  }

  onChangesemifinal_winner1(e) {
    this.setState({
      semifinal_winner1: e.target.value
    });
}
onChangesemifinal_winner2(e) {
    this.setState({
      semifinal_winner2: e.target.value
    });
}


  componentDidMount() {
      fetch('http://localhost:5001/tournament/'+this.props.match.params.id/+'quaterfinals/')
          .then(res => res.json())
          .then(json => {this.setState({
           tournament:json,
        
          })})
        
          .catch(function (error){
              console.log(error);
          })

          
  }
  
  onSubmit(e) {
    e.preventDefault();
    
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.semifinal_winner1}`);
    console.log(`Todo Responsible: ${this.state.semifinal_winner2}`);
   

    const newsemiFinals = {
     semifinal_winner1 : this.state.semifinal_winner1,
     semifinal_winner2 :  this.state.semifinal_winner2,
     
       

       
    };
         axios.post('http://localhost:5001/tournament/semifinal',newsemiFinals)
      .then(res => {
        console.log(res);
        console.log(res.data);
        
        
        
      })
      .catch(function(error){

console.log(error);
      })
      
        
        
    }

 
render() {
 
    var {tournament} =this.state;
  
  return (


<div >


<div class="dividecolumn">
<div class="container">
  
  <h2></h2>
  <div class="tournament-bracket tournament-bracket--rounded">                                                     
    <div class="tournament-bracket__round tournament-bracket__round--Semifinals">
      <h3 class="tournament-bracket__round-title">Semifinals</h3>
      <ul class="tournament-bracket__list">
        <li class="tournament-bracket__item">
          <div class="tournament-bracket__match" tabindex="0">
            <table class="tournament-bracket__table">
              <caption class="tournament-bracket__caption">
                
              </caption>
               
              <tbody class="tournament-bracket__content">
                <tr class="tournament-bracket__team tournament-bracket__team--winner">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code" >{tournament.quaterfinal_winner1}</abbr>
                    <span class="tournament-bracket__flag flag-icon flag-icon-ca" aria-label="Flag"></span>
                  </td>
                  <td class="tournament-bracket__score">
                    <span class="tournament-bracket__number">4</span>
                  </td>
                </tr>
                <tr class="tournament-bracket__team">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code" >{tournament.quaterfinal_winner2}</abbr>
                    
                  </td>
                  <td class="tournament-bracket__score">
                    <span class="tournament-bracket__number">1</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>

        <li class="tournament-bracket__item">
          <div class="tournament-bracket__match" tabindex="0">
            <table class="tournament-bracket__table">
              <caption class="tournament-bracket__caption">
                <time datetime="1998-02-18">18 February 1998</time>
              </caption>
              
              <tbody class="tournament-bracket__content">
                <tr class="tournament-bracket__team tournament-bracket__team--winner">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code">{tournament.quaterfinal_winner3}</abbr>
                    
                  </td>
                  <td class="tournament-bracket__score">
                    <span class="tournament-bracket__number">4</span>
                  </td>
                </tr>
                <tr class="tournament-bracket__team">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code" >{tournament.quaterfinal_winner4}</abbr>
                   
                  </td>
                  <td class="tournament-bracket__score">
                    <span class="tournament-bracket__number">1</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
        
        
      </ul>
      <Link to={"/tournament/"+tournament._id+"/finals"}>
        
    <button>GO TO FINALS </button>
   </Link>
    </div>
   
    </div>
  </div>
</div>
 
  <div class="column">
  <div class="form_wrapper">
  <div >
   
   
      <div class="">
      <form onSubmit={this.onSubmit}>               
                       
                                                                             
      <div class="input_field"> 
            <input type="text" name="email" placeholder="PLAYER 1"   value={tournament.bracket_player1}required />
          </div>
         <div class="input_field"> 
         <input type="text" name="email" placeholder="PLAYER 2" value={tournament.bracket_player2}required />
          </div>
          
          
        <div class="input_field select_option"  value={this.state.semifinal_winner1}
                                onChange={this.onChangesemifinal_winner1}>
                <select>
                  <option>SELECT WINNER</option>
                  <option>{tournament.bracket_player1}</option>
                  <option>{tournament.bracket_player2}</option>
                </select>
              
              </div>
     <div class="input_field"> 
     <input type="text" name="email" placeholder="PLAYER 3" value={tournament.bracket_player3}required />
          </div>
         <div class="input_field"> 
         <input type="text"  name="email" placeholder="PLAYER 4"  value={tournament.bracket_player4} required />
          </div>
          
          
        <div class="input_field select_option"  value={this.state.semifinal_winner2}
                                onChange={this.onChangesemifinal_winner2}>
                <select>
                  <option>SELECT WINNER</option>
                  <option>{tournament.bracket_player3}</option>
                  <option>{tournament.bracket_player4}</option>
                </select>
              
              </div>
           
         
          
          
      
           
          
       
           
          <input class="button" type="submit" value="PUBLISH" />
        </form>
      </div>
   
  </div>
</div>

  
  </div>

        




</div>

   


      
  










     



 );
}
}


