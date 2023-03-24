import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import qData from "./FakeData";
import { GlobalContext } from "../App";

function BottomInfo() {
  const BI_Wrapper = styled.div`
    text-align: center;
    backdrop-filter: blur(50px);
    color: #636262;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 25dvw;
    height: 28dvw;
    position: fixed;
    bottom: 0;
    right: 0;
    border: 1px solid #939799;
    border-radius: 10px;
    font-family: Poppins;
    letter-spacing: -1px;
  `;

  const BI_Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `;

  const localGlobal = useContext(GlobalContext);

  let toRender_choosenGuesses = [];

  for (let i = 0; i < localGlobal.userGuessCart.length; i++) {
    let nextInLine = localGlobal.userGuessCart[i];
    toRender_choosenGuesses.push(
      <UNIT_GUESSMADE title={qData[nextInLine]["title"]} />
    );
  }

  function UNIT_GUESSMADE(props) {
    return (
      <>
        <p>{props.title}</p>
      </>
    );
  }

  return (
    <BI_Wrapper>
      <BI_Content>
        <h2>your guesses:</h2>
        {toRender_choosenGuesses}
      </BI_Content>
    </BI_Wrapper>
  );
}

export default BottomInfo;
