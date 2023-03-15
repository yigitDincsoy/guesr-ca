import React, { useState, useContext } from 'react';
import styled from "styled-components";

function InscreenGuesses() {
    
    const ISG_Wrapper = styled.div`
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

  `;

      const ISG_Content = styled.div`

  `;

    return(
            <ISG_Wrapper>
                <ISG_Content>
                    <h2>Your guesses:</h2>
                    <p>World will end</p>
                    <p>World will end</p>
                </ISG_Content>
            </ISG_Wrapper>

    )
}

export default InscreenGuesses