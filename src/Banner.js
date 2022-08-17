import { useState } from "react";
import "./Banner.css";

function Banner(props) {
  const [query, setquery] = useState("");
  //const test=props.data;
  console.log(props.data.setmovie);
  //console.log(test);
  const Changecolor = (e) => {
    const tab = ["gray", "gray", "gray", "gray", "gray"];
    for (let i = 0; i <= Number(e.target.id); i++) {
      tab[i] = "green";
    }
    for (let i = 0; i < tab.length; i++) {
      document.getElementById(i).style.color = tab[i];
    }
  };
  const test=props.data.filter((a)=>a.name.toLowerCase().includes(query)
  
    )
    
    console.log(test)
    const filter = (e) =>{
       setquery(e.target.value)

    
    }
  return (
    <header>
      <ul className="menu">
        <li>
          {" "}
          <a>Home</a>
        </li>
        <li>
          {" "}
          <a>Movies</a>
        </li>
        <li>
          {" "}
          <a>Reviews</a>
        </li>

        <div>
          <i onClick={Changecolor} id="0" class="fa-solid fa-star"></i>
          <i onClick={Changecolor} id="1" class="fa-solid fa-star"></i>
          <i onClick={Changecolor} id="2" class="fa-solid fa-star"></i>
          <i onClick={Changecolor} id="3" class="fa-solid fa-star"></i>
          <i onClick={Changecolor} id="4" class="fa-solid fa-star"></i>
        </div>
        <input type="text" placeholder="Search..." className="search" 
        onChange={filter}
        />
        {/* <button onClick={()=>{props.func(test)}}>click</button> */}
      </ul>
     
      
      
      
    </header>
  );
}

export default Banner;
