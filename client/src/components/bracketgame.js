import React, { Component } from 'react';

import axios from 'axios';
import { Link} from "react-router-dom";





export default class TournmentDetails extends Component {

  constructor(props) {
      super(props);
      this.onChangequaterfinal_winner1 = this.onChangequaterfinal_winner1.bind(this);
      this.onChangequaterfinal_winner2 = this.onChangequaterfinal_winner2.bind(this);
      this.onChangequaterfinal_winner3 = this.onChangequaterfinal_winner3.bind(this);
      this.onChangequaterfinal_winner4= this.onChangequaterfinal_winner4.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        tournament:[],
        quaterfinal:[],
       quaterfinal_winner1: '',
       quaterfinal_winner2: '',
       quaterfinal_winner3: '',
       quaterfinal_winner4: '',
       tournament_id: ''
       }
  }

  onChangequaterfinal_winner1(e) {
    this.setState({
      quaterfinal_winner1: e.target.value
    });
}
onChangequaterfinal_winner2(e) {
    this.setState({
      quaterfinal_winner2: e.target.value
    });
}

onChangequaterfinal_winner3(e) {
    this.setState({
      quaterfinal_winner3: e.target.value
        
    });
}
onChangequaterfinal_winner4(e) {
  this.setState({
    quaterfinal_winner4: e.target.value
      
  });
}


componentDidMount() {
  fetch('https://fast-hamlet-62898.herokuapp.com/tournament/'+this.props.match.params.id)
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
    console.log(`Todo Description: ${this.state.quaterfinal_winner1}`);
    console.log(`Todo Responsible: ${this.state.quaterfinal_winner2}`);
    console.log(`Todo Priority: ${this.state.quaterfinal_winner3}`);

    const newQuaterFinals = {
     quaterfinal_winner1 : this.state.quaterfinal_winner1,
     quaterfinal_winner2 :  this.state.quaterfinal_winner2,
     quaterfinal_winner3 :  this.state.quaterfinal_winner3,
     quaterfinal_winner4 :  this.state.quaterfinal_winner4,
     tournament_id:this.props.match.params.id
       

       
    };
         axios.post('https://fast-hamlet-62898.herokuapp.com/tournament/quaterfinal/',newQuaterFinals)
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
  <h1>{tournament.bracket_name}</h1>
 
  <div class="tournament-bracket tournament-bracket--rounded">                                                     
    <div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
      <h3 class="tournament-bracket__round-title">Quarterfinals</h3>
      <ul class="tournament-bracket__list">
        <li class="tournament-bracket__item">
          <div class="tournament-bracket__match" tabindex="0">
            <table class="tournament-bracket__table">
              <caption class="tournament-bracket__caption">
                <time datetime="1998-02-18">{tournament.bracket_date}</time>
              </caption>
               
              <tbody class="tournament-bracket__content">
                <tr class="tournament-bracket__team tournament-bracket__team--winner">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code" >{tournament.bracket_player1}</abbr>
                    <span class="tournament-bracket__flag flag-icon flag-icon-ca" aria-label="Flag"></span>
                  </td>
                  <td class="tournament-bracket__score">
                    <span class="tournament-bracket__number">4</span>
                  </td>
                </tr>
                <tr class="tournament-bracket__team">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code" >{tournament.bracket_player1}</abbr>
                    
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
                    <abbr class="tournament-bracket__code">{tournament.bracket_player3}</abbr>
                    
                  </td>
                  <td class="tournament-bracket__score">
                    <span class="tournament-bracket__number">4</span>
                  </td>
                </tr>
                <tr class="tournament-bracket__team">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code" >{tournament.bracket_player4}</abbr>
                   
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
                    <abbr class="tournament-bracket__code" >{tournament.bracket_player5}</abbr>
                    
                  </td>
                  <td class="tournament-bracket__score">
                    <span class="tournament-bracket__number">2</span>
                  </td>
                </tr>
                <tr class="tournament-bracket__team">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code" >{tournament.bracket_player6}</abbr>
                   
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
                    <abbr class="tournament-bracket__code" >{tournament.bracket_player7}</abbr>
                   
                  </td>
                  <td class="tournament-bracket__score">
                    <span class="tournament-bracket__number">4</span>
                  </td>
                </tr>
                <tr class="tournament-bracket__team">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code" >{tournament.bracket_player8}</abbr>
                    <span class="tournament-bracket__flag flag-icon flag-icon-by" aria-label="Flag"></span>
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
      <Link to={"/tournament/semifinals/"+tournament._id}>
        
    <button>GO TO SEMI FINALS </button>
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
          
          
        <div class="input_field select_option"  value={this.state.quaterfinal_winner1}
                                onChange={this.onChangequaterfinal_winner1}>
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
          
          
        <div class="input_field select_option"  value={this.state.quaterfinal_winner2}
                                onChange={this.onChangequaterfinal_winner2}>
                <select>
                  <option>SELECT WINNER</option>
                  <option>{tournament.bracket_player3}</option>
                  <option>{tournament.bracket_player4}</option>
                </select>
              
              </div>
           
          <div class="input_field"> 
          <input type="text" name="email"  placeholder="PLAYER 5"  value={tournament.bracket_player5} required />
          </div>
         <div class="input_field"> 
         <input type="text" name="email" placeholder="PLAYER 6"  value={tournament.bracket_player6}required />
          </div>
          
          
        <div class="input_field select_option"  value={this.state.quaterfinal_winner3}
                                onChange={this.onChangequaterfinal_winner3}>
                <select>
                  <option>SELECT WINNER</option>
                  <option>{tournament.bracket_player5}</option>
                  <option>{tournament.bracket_player6}</option>
                </select>
              
              </div>
           <div class="input_field"> 
           <input type="text" name="email" placeholder="PLAYER 7"    value={tournament.bracket_player7}required />
          </div>
         <div class="input_field"> 
         <input type="text" name="email" placeholder="PLAYER 8"   value={tournament.bracket_player8}required />
          </div>
          
          
        <div class="input_field select_option"  value={this.state.quaterfinal_winner4}
                                onChange={this.onChangequaterfinal_winner4}>
                <select>
                  <option>SELECT WINNER</option>
                  <option>{tournament.bracket_player7}</option>
                  <option>{tournament.bracket_player8}</option>
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


