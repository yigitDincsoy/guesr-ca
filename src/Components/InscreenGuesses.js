import React, { useState, useContext } from 'react';
import styled from "styled-components";

function InscreenGuesses() {
    
    const ISG_Wrapper = styled.div`
    font-size: 1.5em;
    text-align: center;
    background-color: beige;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25dvw;
    height: 25dvw;
    position: fixed;
    bottom: 0;
    right: 0;
    border: 5px solid black;

  `;

    return(
            <ISG_Wrapper>
            <h2>Your guesses:</h2>
            <p>World will end</p>
            <p>World will end</p>
            </ISG_Wrapper>

    )
}

export default InscreenGuesses