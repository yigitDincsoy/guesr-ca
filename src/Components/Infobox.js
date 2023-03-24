import styled from "styled-components";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../App";
import "./Infobox.css";

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
  border-radius: 15px 15px 15px 15px;
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
  /* font-weight: bold; */
  /* box-shadow: inset .75px .75px 3.5px lightgrey;//#63666A; */
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
    const previousArray = localGlobal.userGuessCart;
    previousArray.push(boxData["id"]);
    localGlobal.set_userGuessCart(previousArray);
  }

  const localGlobal = useContext(GlobalContext);
  const boxData = props.data;

  return (
    <InfoboxWrapper className={boxData["category"]}>
      <InfoboxImage src={"stockphotos/" + boxData["photo"]} />
      <div className="imageText">{boxData["category"]}</div>
      <p id="boxTimer" className="timerArea">
        5d 59m 50s

      </p>{" "}
      <div className="thumbsArea">
        <span className="upVotes">
          {boxData["totalGuesses"][0]} <i class="icon-thumbs-up"></i>
        </span>
        <span className="downVotes">
          {" "}
          {boxData["totalGuesses"][1]} <i class="icon-thumbs-down"></i>
        </span>
      </div>
      <InfoboxTitle>{boxData["title"]}</InfoboxTitle>
      <InfoboxButtonArea>
        <InfoboxButton onClick={() => boxSelected()}>
          yes ({boxData["rewardRates"][0]})
        </InfoboxButton>
        <InfoboxButton>no ({boxData["rewardRates"][1]})</InfoboxButton>
      </InfoboxButtonArea>
    </InfoboxWrapper>
  );
}

export default Infobox;
