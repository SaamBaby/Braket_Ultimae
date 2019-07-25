import React from 'react';
import { Link } from "react-router-dom";


function App() {
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
   
 

  
  </div>
  


  
    

    
  
  
  

  );
}

export default App;
