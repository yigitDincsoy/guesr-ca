import styled from "styled-components";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../../App";
import "./Infobox.css";


function activateGenericArea() {
  document.getElementById("GenericBox").style.display = "block";
}




//Styled Components
const InfoboxTitle = styled.h1`
  font-size: 18px;
  font-family: poppins;
  text-align: center;
  position: relative;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

const InfoboxImage = styled.img`
  width: 100%;
  margin-top: -4px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0.25px 0.25px 1px #808080;
`;

const InfoboxButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5px 0px 10px 0px;
`;

const InfoboxButton = styled.button`
  width: 45%;
  padding: 12px;
  border-radius: 10px;
  border-style: none;
  margin-bottom: 8px;
  font-family: poppins;
  background-color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.5px;
  transition: 0.2s all;
  /* Adding transformation when the button is active */
  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 0px 0px 0px 1.5px rgba(0, 0, 0, 0.15);
    /* Lowering the shadow */
  }
`;

const InfoboxWrapper = styled.section`
  width: 25%;
  margin-bottom: 2%;
  margin-left: 1%;
  margin-right: 1%;
  padding: 15px 10px 5px 10px;
  border-radius: 15px;
  box-shadow: 6px 6px 9px #d3d3d3; //inset .5px 2px 1px #d3d3d3,
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  & .imageText {
    font-size: 28px;
    padding-left: 9px;
    position: relative;
    top: -35px;
    right: -3px;
    color: white;
    font-weight: bold;
    letter-spacing: -1.1px;
    text-shadow: 0 0 1px black;
  }

  & .upVotes {
    font-family: poppins;
    font-weight: bold;
    margin-left: 25px;
    padding: 5px;
  }

  & .downVotes {
    font-family: poppins;
    font-weight: bold;
  }
`;

function Infobox(props) {
  function boxSelected() {
    // const previousArray = localGlobal.userGuessCart;
    // previousArray.push(boxData["id"]);
    // localGlobal.set_userGuessCart(previousArray);
  }

  const localGlobal = useContext(GlobalContext);
  const boxData = props.data;

  const payout = calculatePayout();

  const date = new Date(boxData["closeDate"]);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const readableDate = date.toLocaleDateString("en-US", options);
  function calculatePayout() {
    let totalVotes = 0;
    const payout = []
    for (let votes of boxData["votes"]) {
      totalVotes += votes
    }
    for (let votes of boxData["votes"]) {
      payout.push(totalVotes / votes)
    }
    return payout
  }

  return (
    <InfoboxWrapper className={boxData["category"]} onClick={() => { activateGenericArea() }}>
      <InfoboxImage src={"stockphotos/" + boxData["photo"]} />
      <div className="imageText">{boxData["category"]}</div>
      <p id="boxTimer" className="timerArea">
        🕒{readableDate}
      </p>{" "}
      <div className="thumbsArea">
        <span className="upVotes">
          {boxData["votes"][0]} <i className="icon-thumbs-up"></i>
        </span>
        <span className="downVotes">
          {" "}
          {boxData["votes"][1]} <i className="icon-thumbs-down"></i>
        </span>
      </div>
      <InfoboxTitle>{boxData["title"]}</InfoboxTitle>
      <InfoboxButtonArea>
        <InfoboxButton onClick={() => boxSelected()}>
          yes ({payout[0].toFixed(2)})
        </InfoboxButton>
        <InfoboxButton>no ({payout[1].toFixed(2)})</InfoboxButton>
      </InfoboxButtonArea>
    </InfoboxWrapper>
  );
}

export default Infobox;
