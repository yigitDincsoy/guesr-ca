import styled from "styled-components";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../App";
import './Infobox.css';



//Styled Components
const InfoboxTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  color: white;
  min-height: 3rem;
  max-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 25px;
  letter-spacing: .25px;
`;

const InfoboxImage = styled.img`
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  box-shadow: 1px .25px 9px #808080;
  opacity: 90%;
`;

const InfoboxButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0px 15px 0px;
`;

const InfoboxButton = styled.button`
  width: 40%;
  padding: 6px;
  border-radius: 5px;
  border-style: none;
  margin-bottom: 7px;
  font-family: Poppins;
  font-weight: bold;
`;

const InfoboxWrapper = styled.section`
  // border: 5px solid white;
  width: 25%;
  height: 40%;
  margin: auto;
  margin-bottom: 5%;
  margin-left: 1%;
  margin-right: 1%;
  // min-height: 30rem; 
  // max-height: 30rem;
  border-radius: 15px;
  box-shadow: inset .5px 2px 1px #d3d3d3, 6px 4px 9px #d3d3d3;
  transition: all 0.2s ease-in-out; 

  &:hover {
    transform: scale(1.03);
  }

  & .imageText {
    font-size: 1.5rem;
    padding-left: 5px;
    position: relative;
    top: -28px;
    right: -3px;
    color: white;
    height: 0px;
    font-weight: 1000;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
  }

  & .Green {
    margin-left: 20px;
    background-color: green;
    opacity: 50%;
    padding: 5px;
    color: white;
  }

  & .Red {
    background-color: darkred;
    opacity: 50%;
    padding: 5px;
    color: white;
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
      <p>5 Days 3 Hours</p>
      <InfoboxTitle>{boxData["title"]}</InfoboxTitle>
      <InfoboxButtonArea>
        <InfoboxButton onClick={() => boxSelected()}>
          Yes ({boxData["rewardRates"][0]})
        </InfoboxButton>
        <InfoboxButton>No ({boxData["rewardRates"][1]})</InfoboxButton>
      </InfoboxButtonArea>
      <p>
        <span className="Green">{boxData["totalGuesses"][0]} <i class="icon-thumbs-up"></i></span>
        <span className="Red"> {boxData["totalGuesses"][1]} <i class="icon-thumbs-down"></i></span>
      </p>
    </InfoboxWrapper>
  );
}

export default Infobox;
