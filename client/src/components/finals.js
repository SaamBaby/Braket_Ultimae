import React, { Component } from 'react';

import axios from 'axios';





export default class finals extends Component {

  constructor(props) {
      super(props);
      this.onChangefinal_winner1 =  this.onChangefinal_winner1.bind(this);
      
     
    
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        tournament:[],
         
      quaterfinal:[],
       final_winner1: '',
       tournament_id: ''
       }
  }

  onChangefinal_winner1(e) {
    this.setState({
      final_winner1: e.target.value
    });
}






componentDidMount() {
  fetch('https://brakets.herokuapp.com/tournament/semifinal/'+this.props.match.params.id)
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
    console.log(`Todo Description: ${this.state.final_winner1}`);
    

    const newsemiFinals = {
     final_winner1 : this.state.final_winner1,
    
     tournament_id:this.props.match.params.id
       

       
    };
         axios.post('https://brakets.herokuapp.com/tournament/final/',newsemiFinals)
      .then(res => {
        console.log(res);
        console.log(res.data);
        
        
        
      })
      .catch(function(error){

console.log(error);
      })
      
        
        
    }

 
render() {
  
  
 
    var { tournament} =this.state;
    
    console.log({tournament});
  
  return (
    <div>



<div class="dividecolumn">
  
<div class="container">
 
{Object.keys(tournament).map((key) => 
  <div class="tournament-bracket tournament-bracket--rounded">                                                     
    <div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
      <h3 class="tournament-bracket__round-title">Quarterfinals</h3>
      <ul class="tournament-bracket__list">
        <li class="tournament-bracket__item">
          <div class="tournament-bracket__match" tabindex="0">
            <table class="tournament-bracket__table">
              <caption class="tournament-bracket__caption">
               
              </caption>
               
              <tbody class="tournament-bracket__content">
                <tr class="tournament-bracket__team tournament-bracket__team--winner">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code" >{tournament[key].semifinal_winner1}</abbr>
                    <span class="tournament-bracket__flag flag-icon flag-icon-ca" aria-label="Flag"></span>
                  </td>
                  <td class="tournament-bracket__score">
                    <span class="tournament-bracket__number">4</span>
                  </td>
                </tr>
                <tr class="tournament-bracket__team">
                  <td class="tournament-bracket__country">
                    <abbr class="tournament-bracket__code" >{tournament[key].semifinal_winner2}</abbr>
                    
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
     
    </div>
   
    </div>
    )}
  </div>
</div>
 
  <div class="column">
  <div class="form_wrapper">
  <div >
   
   
      <div class="">
      {Object.keys( tournament).map((key) =>       
      <form onSubmit={this.onSubmit}>               
            
                                                                             
      <div class="input_field"> 
            <input type="text" name="email" placeholder="PLAYER 1"   value={tournament[key].semifinal_winner1}required />
          </div>
         <div class="input_field"> 
         <input type="text" name="email" placeholder="PLAYER 2" value={tournament[key].semifinal_winner2}required />
          </div>
          
          
        <div class="input_field select_option"  value={this.state.final_winner1}
                                onChange={this.onChangefinal_winner1}>
                <select>
                  <option>SELECT WINNER</option>
                  <option>{tournament[key].semifinal_winner1}</option>
                  <option>{tournament[key].semifinal_winner2}</option>
                </select>
              
              </div>
    
          
          
        
           
          
          
          
       
           
           
          <input class="button" type="submit" value="PUBLISH" />
        </form>
        )}
      </div>
   
  </div>
  
</div>


</div>

     
</div>



 );
}
}


