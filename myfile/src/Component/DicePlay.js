import React,{useState} from 'react';
// import Alerttemp from './Alerttemp';


export default function DicePlay(props)  {
    const[dice,setDice]=useState('Dice-1-b.png');
    const [playerone,playeroneResult]=useState(0)
    const [successbtnClicked,successbtnSet]=useState(false);
    const [dangerbtnClicked,dangerbtnSet]=useState(false);
    const[totalplayerone,resulttotalplayerone]=useState(0)
    const[totalplayertwo,resulttotalplayertwo]=useState(0)
    const [playertwo,playertwoResult]=useState(0)
    
    const[buttonunclicked,buttonClicked]=useState(false)
    const[playeronewinner,playeronewinnerResult]=useState("")
    const[playertwowinner,playertwowinnerResult]=useState("")
    const displayplayerone={
        margin:"70px 0px 0px 230px",
        position:"absolute",
        fontFamily:"Copperplate",
        userSelect:"none",
    }
    const displayplayertwo={
        margin:"-130px 0px 0px 30px",
        position:"absolute",
        fontFamily:"Copperplate",
        userSelect:"none",
    }

const heading={
    position:"absolute",
    margin:"5px 0px 0px 615px",
    fontFamily:"Copperplate",
    color:"white",
    userSelect:"none",
}
const headingPara={
    position:"absolute",
    margin:"55px 0px 0px 550px",
    fontFamily:"Copperplate",
    color:"white",
    userSelect:"none",
}
    const imageDiceStyle={
        marginTop:"-70px",
        marginLeft:"670px",
        position:"absolute",
        margin:"670px",
        userSelect:"none",
       
    }
    const playeroneCss={
        fontSize: "215px",
        color:"white",
        margin:"-10px 0px 0px 90px",
        userSelect:"none",
    }
    const playertwoCss={
        fontSize: "215px",
        color:"white",
        margin:"-10px 0px 0px 95px",
        userSelect:"none",
    }
    const totalCss={
        margin:"0px 0px 0px 85px",
        color:"white",
        backgroundColor:"#bd838d",
        padding:"10px",
        width:"150px",
        borderRadius:"20px",
        userSelect:"none",
    }
    const totalCsstwo ={
        margin:"0px 0px 0px 90px",
        color:"white",
        backgroundColor:"#736f7a",
        padding:"10px",
        width:"150px",
        borderRadius:"20px",
        userSelect:"none",
    }
    const playeroneDiceStyle={
        color:"black",
        backgroundColor:"#e1886a",
        position:"absolute",
        marginTop:"600px",
        marginLeft:"170px",
        width:"400px",
        color:"white",
        userSelect:"none",
    }
    const playertwoDiceStyle={
        color:"black",
        backgroundColor:"#151d2d",
        position:"absolute",
        marginTop:"600px",
        marginLeft:"870px",
        width:"400px",
        color:"white",
        userSelect:"none",
    }


    const leftImage={
       height:"100px",
       position:"absolute",
       margin:"0px 0px 0px 1365px",
       userSelect:"none",
       pointerEvents: "none",
       userSelect:"none",
    }
    const sImage ={
        userSelect:"none",
       pointerEvents: "none",
       userSelect:"none",

    }
    const circleStyle = {
        width: '325px',
        height: '325px',
        borderRadius: '50%',
        backgroundColor: '#736f7a',
        border:"2px solid rgb(255, 165, 0)",
        position:"absolute",
        margin:"200px 0px 0px 200px",
        userSelect:"none",
      };
    const  circleStyletwo={
        width: '325px',
        height: '325px',
        borderRadius: '50% ',
        backgroundColor: '#bd838d',
        border:"2px solid rgb(255, 99, 71)",
        position:"absolute",
        margin:"200px 0px 0px 900px",
        userSelect:"none",

    }

    // dice logic for player one
    let playonefuns=()=>{
        successbtnSet(true)
        dangerbtnSet(false)
        if(totalplayerone<=100){
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
    successbtnSet(true)
    dangerbtnSet(true)
    playeronewinnerResult('player 1 winner')
    // alertmsgnow('player 1 winner','success')
    
}
    
}
    let playtwofuns=()=>{
        dangerbtnSet(true)
        successbtnSet(false)
        if(totalplayertwo<=100){
        
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
         successbtnSet(true)
        dangerbtnSet(true)
            playertwowinnerResult("player 2 winner")
            
        }
            }
            
  return (

    <div style={{ display: 'flex', height: '100vh' }}>
      
        <h1 style={heading}>Roll Dice  </h1>
        <h5 style={headingPara}>A Classic Game of Chance and Fun! </h5>
        
        <h2 style={displayplayerone}>{playeronewinner}</h2>
        <img src={dice} alt="Dice Image" style={imageDiceStyle} width="100" height="100"/>
        <div style={circleStyle}>
        <h1 style={playeroneCss} >{playerone}</h1>
        <h5  style={totalCss}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total : {totalplayerone}</h5>
        </div>
        <img src='left3.jpg' style={sImage} alt="Dice Image"></img>
      <div style={{ flex: 1, backgroundColor: '#f8ccac' }}></div>
      <div style={circleStyletwo}>
      <h2 style={displayplayertwo}>{playertwowinner}</h2>
      <h1 style={playertwoCss} >{playertwo}</h1>
        <h5 style={totalCsstwo}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total : {totalplayertwo}</h5>
      </div>
      <div style={{ flex: 1, backgroundColor: '#736f7a' }}></div>
      <img src='right.jpg' style={sImage} alt="Dice Image"></img>
      <img src='right2.png' style={leftImage} alt="Dice Image"></img>
      <button disabled={successbtnClicked} type="button" onClick={playonefuns} style={playeroneDiceStyle} className="btn btn-primary">Player 1</button>
      <button disabled={dangerbtnClicked} type="button" onClick={playtwofuns} style={playertwoDiceStyle} className="btn btn-primary">Player 2</button>
     
      
     
      
    </div>
  );
};

// export default Page;
