import { useState } from "react";
import Alertpop from './ClickEvents'
function RpsGame (){

    let [userScore, setUserScore]= useState(0);
    let [compScore,setCompScore]= useState(0);
    let [boxMsg,setBoxMsg]=useState('pick your gestures')
    const handleingEvents = (event)=>{
        event.preventDefault()
        Alertpop();
    }
    //Computer Choice
    const ChoiceSelection= ['rock','paper','scissor']
    const playGame = (choice)=>{
      const compChoice = ChoiceSelection[Math.floor(Math.random()*choice.length)] 
        if((choice === 'rock' && compChoice === 'rock') || (choice === 'paper'&& compChoice === 'paper') || (choice === 'scissor' && compChoice === 'scissor'))
        {
            console.log("Draw")
            setBoxMsg('Draw')
        }
        else if((choice === 'paper' && compChoice === 'rock') || (choice === 'rock' && compChoice === 'scissor') || (choice === 'scissor' && compChoice === 'paper'))
        {
            setUserScore(++userScore)
            console.log("Player won")
            console.log(`Computer Lost by choosing ${compChoice}`)
            setBoxMsg(`Player won by ${choice} over Computer choice ${compChoice}`)
        }
        else if ((choice === 'paper' && compChoice === 'scissor' )|| (choice === 'rock' && compChoice === 'paper') || (choice === 'scissor' && compChoice === 'rock'))
        {
            setCompScore(++compScore)
            console.log("Player Lost")
            console.log(`Computer won by choosing ${compChoice}`)
            setBoxMsg(`Computer won by ${compChoice} over Player choice ${choice}`)
        }
    }
    
return (
    <>
    <div className="header">
        <h2>Rock Paper Scissors</h2>
    </div>

    <div className="Choices">
        <div className="choice" id="Rock" onClick={()=>{playGame('rock')}}>
            <img src={"/rock.PNG"} alt=""></img>
        </div>
        <div className="choice" id="Paper" onClick={()=>{playGame('paper')}}>
            <img src={"/paper.PNG"} alt=""></img>
        </div>
        <div className="choice" id="Scissor" onClick={()=>{playGame('scissor')}}>
            <img src={"/sissor.PNG"} alt=""></img>
        </div>
    </div>

    <div className="Score">
        <div>
        <h6>Your Score : {userScore} </h6>
        </div>
        <div>
        <h6>Computer Score : {compScore} </h6>
        </div>
    </div>

    <div className="msgBox">
        <button><p>{boxMsg}</p></button>
    </div>
    <div className="begin">
        <button onClick={handleingEvents}>END_GAME</button>
    </div>
    </>

)}
export default RpsGame;