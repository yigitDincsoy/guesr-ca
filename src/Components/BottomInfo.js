import React, { useState, useContext } from 'react';
import styled from "styled-components";
import qData from './FakeData';
import { GlobalContext } from "../App";

function BottomInfo() {
    const BI_Wrapper = styled.div`
    text-align: center;
    background-color: beige;
    color: black;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 20dvw;
    height: 28dvw;
    position: fixed;
    bottom: 0;
    right: 0;
    border: 5px solid black;
    font-family: 'Josefin Sans', sans-serif;

  `;

      const BI_Content = styled.div`

  `;

    const localGlobal = useContext(GlobalContext);
    let toRender_choosenGuesses = [];

    for (let i = 0; i < localGlobal.userGuessCart.length; i++) {
        let nextInLine = localGlobal.userGuessCart[i];
        toRender_choosenGuesses.push(<UNIT_GUESSMADE title={qData[nextInLine]["title"]}/>)

    }

    function UNIT_GUESSMADE(props) {
        return(
            <>
                <p>{props.title}</p>
            </>
        )
    }

    return(
            <BI_Wrapper>
                <BI_Content>
                    <h2>Your guesses:</h2>
                    {  toRender_choosenGuesses }
                </BI_Content>
            </BI_Wrapper>

    )
}

export default BottomInfo