import React,{useLayoutEffect} from 'react';
// import {useState} from 'react'


export default function DiceMain() {
    useLayoutEffect(()=>{
        document.body.style.backgroundImage= "linear-gradient(#5c9ca8, #78bfbe)"
    })
   
    
    const imageStyle= {
        width:"1150px",
        heigth:"750px",
        marginLeft:"160px"
    
    }
    const welcome={
        margin:"30px 0px 0px 380px",
        position:"absolute",
        color:"#f5a669",
        fontFamily:"Copperplate"
    }
    const buttonCss={
        backgroundColor:"#f5a669",
        width:"390px",
        heigth:"100px",
        borderRadius:"20px",
        position:"absolute",
        margin:"430px 0px 0px -750px",
        cursor: 'pointer',

    }
    const intro={
        margin:"10px 20px 20px 10px",
        textAlign: "justify",

        // position:"absolute",
        color:"black",
        fontFamily:"Copperplate"
    }
    const divStyle={
        border:"2px white", 
        margin:"-500px 20px 20px 450px",
        position:"absolute",
        width:"600px",
        heigth:"515",
        borderRadius:"20px",
        backgroundColor:"white",
        boxShadow: "2px 3px 3px 2px #9E9E9E"

    }
    
  return (
    <>
    
         <h1 style={welcome}><b>Welcome to the Roll the Dice game!</b></h1>
      <img src='diceImage.png'style={imageStyle} alt="test"></img>
      <div style={divStyle}>
      <h5 style={intro}>Let's shake things up and see what luck has in store for us! May the odds be ever in your favor and let's hope the rolls bring plenty of laughter and fun.</h5>
      </div>
      
    
     <button  style={buttonCss} > Play </button>
    </>
  )
}
