import "./GuessHistory.css";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../../App";
import HistoryInfobox from './HistoryInfobox'


function GuessHistory() {
  

  return (
   
      <div id="HistoryWrapper">
      <h1>You can find your previous guesses here.</h1>
      <HistoryInfobox/>
      <HistoryInfobox/>
      <HistoryInfobox/>
      <HistoryInfobox/>
      <HistoryInfobox/>
      </div>
  );
}

export default GuessHistory;

