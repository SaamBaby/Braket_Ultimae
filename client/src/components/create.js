import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
import axios from 'axios';
//import "bootstrap/dist/css/bootstrap.min.css";



export default class create extends Component {

    constructor(props) {
        super(props);
    
            this.onChangebracket_name = this.onChangebracket_name.bind(this);
            this.onChangebracket_date = this.onChangebracket_date.bind(this);
            this.onChangebracket_desc = this.onChangebracket_desc.bind(this);
            this.onChangebracket_host = this.onChangebracket_host.bind(this);
            this.onChangebracket_time = this.onChangebracket_time.bind(this);
            this.onChangebracket_player1 = this.onChangebracket_player1.bind(this);
            this.onChangebracket_player2 = this.onChangebracket_player2.bind(this);
            this.onChangebracket_player3 = this.onChangebracket_player3.bind(this);
            this.onChangebracket_player4= this.onChangebracket_player4.bind(this);
            this.onChangebracket_player5 = this.onChangebracket_player5.bind(this);
            this.onChangebracket_player6 = this.onChangebracket_player6.bind(this);
            this.onChangebracket_player7 = this.onChangebracket_player7.bind(this);
            this.onChangebracket_player8 = this.onChangebracket_player8.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            bracket_name: '',
            bracket_date: '',
            bracket_desc: '',
            bracket_host: '',
            bracket_time: '',
            bracket_player1: '',
            bracket_player2: '',
            bracket_player3: '',
            bracket_player4: '',
            bracket_player5: '',
            bracket_player6: '',
            bracket_player7: '', 
            bracket_player8: ''
        
            
        }
    }

    onChangebracket_desc(e) {
        this.setState({
            bracket_desc: e.target.value
        });
    }

    onChangebracket_date(e) {
        this.setState({
           bracket_date: e.target.value
        });
    }

    onChangebracket_name(e) {
        this.setState({
            bracket_name: e.target.value
            
        });
    }

    onChangebracket_host(e) {
        this.setState({
            bracket_host: e.target.value
            
        });
    }
    onChangebracket_time(e) {
        this.setState({
            bracket_time: e.target.value
            
        });
    }
    onChangebracket_player1(e) {
        this.setState({
            bracket_player1: e.target.value
            
        });
    }
    onChangebracket_player2(e) {
        this.setState({
            bracket_player2: e.target.value
            
        });
    }
    onChangebracket_player3(e) {
        this.setState({
            bracket_player3: e.target.value
            
        });
    }
    onChangebracket_player4(e) {
        this.setState({
            bracket_player4: e.target.value
            
        });
    }
    onChangebracket_player5(e) {
        this.setState({
            bracket_player5: e.target.value
            
        });
    }
    onChangebracket_player6(e) {
        this.setState({
            bracket_player6: e.target.value
            
        });
    }
    onChangebracket_player7(e) {
        this.setState({
            bracket_player7: e.target.value
            
        });
    }
    onChangebracket_player8(e) {
        this.setState({
            bracket_player8: e.target.value
            
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.bracket_desc}`);
        console.log(`Todo Responsible: ${this.state.bracket_date}`);
        console.log(`Todo Priority: ${this.state.bracket_host}`);

        const newTournament = {
            bracket_name: this.state.bracket_name,
            bracket_desc: this.state.bracket_desc,
            bracket_date: this.state.bracket_date,
            bracket_time: this.state.bracket_time,
            bracket_host: this.state.bracket_host,
            bracket_player1: this.state.bracket_player1,
            bracket_player2: this.state.bracket_player2,
            bracket_player3: this.state.bracket_player3,
            bracket_player4: this.state.bracket_player4,
            bracket_player5: this.state.bracket_player5,
            bracket_player6: this.state.bracket_player6,
            bracket_player7: this.state.bracket_player7,
            bracket_player8: this.state.bracket_player8,

           
        };
   
        
            axios.post('http://localhost:5001/tournament/create',newTournament)
      .then(res => {
        console.log(res);
        console.log(res.data);
        
        
        
      })
      .catch(function(error){

console.log(error);
      })
      
        this.setState({
            
                bracket_name: '',
                bracket_date: '',
                bracket_desc: '',
                bracket_host: '',
                bracket_time: '',
                bracket_player1: '',
                bracket_player2: '',
                bracket_player3: '',
                bracket_player4: '',
                bracket_player5: '',
                bracket_player6: '',
                bracket_player7: '', 
                bracket_player8: ''
            
                
            
            
        })
        
    }
    render() {
        return (
           
            <div style={{marginTop: 10}}>
               <div className="Head">
   <h2>NEW TOURNMENT </h2>

  </div> 
  
                <form onSubmit={this.onSubmit}>

                <div className="form-group">
                        <label>Host</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_Host}
                                onChange={this.onChangebracket_host}
                                />
                    </div>
                    <div className="form-group">
                        <label>Tournament name</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_name}
                                onChange={this.onChangebracket_name}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.bracket_desc}
                                onChange={this.onChangebracket_desc}
                                />
                     
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_date}
                                onChange={this.onChangebracket_date}
                                />
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_time}
                                onChange={this.onChangebracket_time}
                                />
                    </div>
                    <div className="form-group">
                        <label>Player 1</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_player1}
                                onChange={this.onChangebracket_player1}
                                />
                    </div>
                    <div className="form-group">
                        <label>Player 2</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_player2}
                                onChange={this.onChangebracket_player2}
                                />
                    </div>
                    <div className="form-group">
                        <label>Player 3</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_player3}
                                onChange={this.onChangebracket_player3}
                                />
                    </div>
                    <div className="form-group">
                        <label>Player 4</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_player4}
                                onChange={this.onChangebracket_player4}
                                />
                    </div>
                    <div className="form-group">
                        <label>Player 5</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_player5}
                                onChange={this.onChangebracket_player5}
                                />
                    </div>
                    <div className="form-group">
                        <label>Player 6</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_player6}
                                onChange={this.onChangebracket_player6}
                                />
                    </div>
                    <div className="form-group">
                        <label>Player 7</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_player7}
                                onChange={this.onChangebracket_player7}
                                />
                    </div>
                    <div className="form-group">
                        <label>Player 8</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bracket_player8}
                                onChange={this.onChangebracket_player8}
                                />
                    </div>

                   
                    <div className="form-group">
                        <input type="submit" value="Create Tournament" className="btn btn-primary" />
                        <Link to="/tournament">
                                 Back
                     </Link>  
                    </div>
                    
                   
                    
                </form>
            </div>
        )
    }
}