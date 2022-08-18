import React, { useRef, useState } from 'react'
import Banner from './Banner';
import Item from './Item';
import Addmovie from './Addmovie';


function MovieList() {

    const [movies,setMovie]=useState(
           [
              {name:"jhon wick11",image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",rate:"3"},
              {name:"jhon wick12",image:"https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",rate:"3"},
           



])
// const [statecopie,setCopie]=useState(

// )
// setCopie(movies)
//  const namemovie=useRef()
//  console.log(movies)
const namemovie=useRef()
return (
    <div >
      
        <Banner movies1={movies} setMovie1={setMovie}></Banner>
      {movies.map((e) => (
        <Item name={e.name} image={e.image} rate={e.rate}></Item>
      ))}
      <Addmovie movies={movies} setMovie={setMovie}/>
{/* <input type="text" ref={namemovie}></input> */}
      
 
    </div>
  );
    
    
   
}

export default MovieList
