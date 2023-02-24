import './App.css';
// import NavBar from './Component/NavBar';
// import Accordion from './Component/Accordion';
import Dice from './Component/Dice';
import React, { useState } from 'react'

function App() {
  const [darkMode,SetDarkMode]=useState({
    color:"black",
    backgroundColor:"white"
})
const test=()=>{
   if(darkMode.backgroundColor==="white"){
    
    SetDarkMode({
      
        color:"white",
        backgroundColor:"black"
    })
   }else{
    
    SetDarkMode({
        color:"black",
        backgroundColor:"white"
    })
   }
}

  return (
    <>  
    
    {/* <NavBar darkMode={darkMode} test={test}/> */}
    {/* <Accordion darkMode={darkMode} test={test}/> */}
    <Dice/>
    
    </>
  );
}

export default App;
