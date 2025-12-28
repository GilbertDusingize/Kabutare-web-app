import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Heading(){

  const customStyle={
      color:"red",
      fontSize:"2rem"
  }
  const currentTime= new Date().getHours();
  let greeting="";
  const name="Gilbert";
  
     
  if(currentTime< 12){
      greeting="Good Morning";
      customStyle.color="red";
  }
    else if(currentTime<18){
      greeting="Good Afternoon!";
      customStyle.color="blue";
    } else{greeting="Good Night!";
    customStyle.color="green";}
   return(
   <div>
     
      <h2 style={customStyle}>{greeting} {name}</h2>
       <h1>Welcome in KTSS  </h1>
  
     </div>);
}
export default Heading