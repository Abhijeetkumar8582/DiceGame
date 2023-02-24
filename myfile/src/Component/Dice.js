import React, { useState } from 'react'
// import logo from '../Component/'

export default function Dice() {
    const box={
        border:"2px Solid",
        width:"500px",
        height:"500px",
        marginTop:"90px",
        borderRadius:"20px",
        margin:"90px 0px 0px 147px",
        display: 'inline-block'
    }
    const playeroneDiceStyle={
        color:"black",
        backgroundColor:"red",
        
        marginTop:"-10px",
        marginLeft:"330px"
    }
    const playertwoDiceStyle={
        color:"black",
        backgroundColor:"red",
        
        marginTop:"-10px",
        marginLeft:"590px"
    }
    const imageDiceStyle={
        marginTop:"-70px",
        marginLeft:"670px"
    }
    const [colors,setColor]=useState({
        backgroundColor:"white"
    })
    const [playerone,playeroneResult]=useState(0)
    const[totalplayerone,resulttotalplayerone]=useState(0)
    const[totalplayertwo,resulttotalplayertwo]=useState(0)
    const [playertwo,playertwoResult]=useState(0)
    const[dice,setDice]=useState('Dice-1-b.png');
    const[buttonunclicked,buttonClicked]=useState(false)
    const[playeronewinner,playertwowinner]=useState("Who will this match let's see")
    
    let playonefuns=()=>{
        if(totalplayerone<100){
let nums= Math.round(Math.random()*6);
if (nums===1){

    setDice('Dice-1-b.png')
    playeroneResult(nums)
   
    resulttotalplayerone(totalplayerone+nums)
    //

} else if(nums===2){
    setDice('1200px-Dice-2-b.svg.png')
    playeroneResult(nums)
   
   
    resulttotalplayerone(totalplayerone+nums)
    //
}
else if(nums===3){
    setDice('1200px-Dice-3-b.svg.png')
    playeroneResult(nums)
    

    resulttotalplayerone(totalplayerone+nums)
   
}else if(nums===4){
    setDice('Dice-4-b.svg.png')
    playeroneResult(nums)
   
    resulttotalplayerone(totalplayerone+nums)
   
}else if(nums===5){
    setDice('557px-Dice-5.svg.png')
    playeroneResult(nums)
   
    resulttotalplayerone(totalplayerone+nums)
   
}else if(nums===6){
    setDice('768px-Dice-6-b.svg.png')
    playeroneResult(nums)
   
    resulttotalplayerone(totalplayerone+nums)
   
}}
else{
    playertwowinner('player 1 winner')
    setColor({
        backgroundColor:"red"
    })
    
}
    
}
    let playtwofuns=()=>{
        if(totalplayertwo<100){
        
        let nums= Math.round(Math.random()*6);
        if (nums===1){
            setDice('Dice-1-b.png')
            playertwoResult(nums)
            resulttotalplayertwo(totalplayertwo+nums)
        
        } else if(nums===2){
            setDice('1200px-Dice-2-b.svg.png')
            playertwoResult(nums)
           
            resulttotalplayertwo(totalplayertwo+nums)
        }
        else if(nums===3){
            setDice('1200px-Dice-3-b.svg.png')
            playertwoResult(nums)
           
            resulttotalplayertwo(totalplayertwo+nums)
        }else if(nums===4){
            setDice('Dice-4-b.svg.png')
            playertwoResult(nums)
           
            resulttotalplayertwo(totalplayertwo+nums)
        }else if(nums===5){
            setDice('557px-Dice-5.svg.png')
            playertwoResult(nums)
           
            resulttotalplayertwo(totalplayertwo+nums)
        }else if(nums===6){
            setDice('768px-Dice-6-b.svg.png')
            playertwoResult(nums)
           
            resulttotalplayertwo(totalplayertwo+nums)
        }}else{
            
                playertwowinner("player 2 winner")
            
        }
            }
  return (
    <div>
        <div className='Container' >
            <h1 style={colors} >{playeronewinner}</h1>
            <div className='box' style={box}>
                <h1 id="playerone">{playerone}</h1>
                <h4>total = {totalplayerone}</h4>
                <p id="t"></p>
            </div>
            <div className='box' style={box}>
            <h1 id="playerone">{playertwo}</h1>
        <h4>total ={totalplayertwo}</h4>
            </div>
        </div>
      
      <img src={dice} alt="Girl in a jacket" style={imageDiceStyle} width="100" height="100"/>

      <p id='textprimary' ></p>
      <button type="button" onClick={playonefuns} style={playeroneDiceStyle} className="btn btn-primary">Roll Dice</button>
      <button type="button" onClick={playtwofuns} style={playertwoDiceStyle} className="btn btn-primary">Roll Dice</button>
          </div>
  )
}
