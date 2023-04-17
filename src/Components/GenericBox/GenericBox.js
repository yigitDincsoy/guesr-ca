import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../App";
import "./GenericBox.css";


function GenericBox(props) {

  function sendRequestToServer() {
    let myBody = "";
    if (localGlobal.eventchoosen[1]) {
  
      myBody = JSON.stringify(
        { 
          "votes": [eventChoosenData["votes"][0]+1, eventChoosenData["votes"][1]],
      }
       )
    } else {
      myBody = JSON.stringify(
        { 
          "votes": [eventChoosenData["votes"][0], eventChoosenData["votes"][1]+1],
      }
       )
    }




     console.log(myBody)


    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: myBody
  };
  fetch('http://localhost:3000/api/question/'+eventChoosenData["_id"], requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const localGlobal = useContext(GlobalContext);

  const eventChoosenData = localGlobal.serverData_question.data[localGlobal.eventchoosen[0]];

  console.log(eventChoosenData)

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
        <p>Reward modifier is {sadCalculatePayout()[0].toFixed(2)}</p>
        </>
        : 
        <>
        <p>You are saying NO</p>
        <p>Reward modifier is {sadCalculatePayout()[1].toFixed(2)}</p>
        </>
        
        }
        
        
        <p>Please type an amount:</p>
        <input id="text" type="text" placeholder="enter amount"/>
        <br/>
        <div className="buttonContainer">
        <button className="letsGo" type="button" onClick={() => {sendRequestToServer()}}>Let's Go!</button>
        <button className="cancel" type="button" onClick={() => {document.getElementById("GenericBox").style.display = "none" }}>Cancel</button>
        </div>
        </div>
        </div>

  );
}

export default GenericBox;
