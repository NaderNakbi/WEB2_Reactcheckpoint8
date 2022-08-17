import React, { Component } from 'react'
import './Banner.css';
 class Banner2 extends Component {
    constructor(){
        super()
        this.state={
            tab:["gray","gray","gray","gray","gray"]
        }
       } 
Changecolor(){
   
}





  render() {
    return (
        <header>
        
        <ul className="menu">
            <li> <a >Home</a></li>
            <li> <a >Movies</a></li>
            <li> <a >Reviews</a></li>
            <li> <i className="fa-solid fa-arrow-right-to-bracket"></i><a href="#Login">Login</a></li>
            <div>
                
            <i onClick={} id="0" class="fa-solid fa-star"></i> 
             <i onClick={Changecolor} id="1" class="fa-solid fa-star"></i> 
             <i onClick={Changecolor} id="2" class="fa-solid fa-star"></i> 
             <i onClick={Changecolor} id="3" class="fa-solid fa-star"></i> 
             <i onClick={Changecolor} id="4" class="fa-solid fa-star"></i> 
             
            </div>
         
        </ul>
        
       </header>
    )
  }
}

export default Banner2
