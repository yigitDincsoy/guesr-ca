import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../App";
import "./GenericBox.css";






function GenericBox(props) {
  const localGlobal = useContext(GlobalContext);

  const eventChoosenData = localGlobal.serverData_question.data[localGlobal.eventchoosen[0]];


  function sadCalculatePayout() {
    let totalVotes = 0;
    const payout = []
    for (let votes of eventChoosenData["votes"]) {
      totalVotes += votes
    }
    for (let votes of eventChoosenData["votes"]) {
      payout.push(totalVotes / votes)
    }
    return payout
  }

  return (
    <div className="genericBoxWrapper" id="GenericBox">
        <div className="genericBox">
        <h4>🍀 Please Confirm! 🍀</h4>

        <p>Q: {eventChoosenData.title}</p>

        {localGlobal.eventchoosen[1]?
        <>
        <p>You are saying YES</p>
         <div id="reward">Reward modifier is {sadCalculatePayout()[0].toFixed(2)}</div>
        </>
        : 
        <>
        <p>You are saying NO</p>
        <div id="reward">Reward modifier is {sadCalculatePayout()[1].toFixed(2)}</div>
        </>
        
        }
        
        <div className="form">
        <input id="text" type="text" placeholder="please enter an amount"/>
        </div>
        <br/>
        <div className="buttonContainer">
        <button className="letsGo" type="button">let's go!</button>
        <button className="cancel" type="button" onClick={() => {document.getElementById("GenericBox").style.display = "none" }}>cancel</button>
        </div>
        </div>
        </div>

  );
}

export default GenericBox;
