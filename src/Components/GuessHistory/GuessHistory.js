import "./GuessHistory.css";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../../App";
import HistoryInfobox from './HistoryInfobox'


function GuessHistory() {
  

  return (
      <div id="HistoryWrapper">
      <HistoryInfobox/>
      <HistoryInfobox/>
      <HistoryInfobox/>
      <HistoryInfobox/>
      <HistoryInfobox/>
      </div>
  );
}

export default GuessHistory;

