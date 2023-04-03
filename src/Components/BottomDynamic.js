import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import qData from "./FakeData";
import { GlobalContext } from "../App";

function BottomDynamic() {
  const BI_Wrapper = styled.div`
    text-align: center;
    backdrop-filter: blur(50px);
    color: #636262;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 35dvw;
    height: 55dvw;
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
      <form>
                <h3>Sign Up</h3>
                <label for="email">Email:</label>
                <input type="text" placeholder="Email" ></input><br />
                <label  for="password">Password:</label>
                <input id="password1" type="password" placeholder="Password" ></input><br />
                <label  for="password2">Enter Password Again:</label>
                <input id="password2" type="password"></input><br/>
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday"></input>

                <label for="gender">Gender:</label>
                <select id="gender" name="gender">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="nondisclose">Prefer not to Disclose</option>
                </select><br />
                <button>Sign Up</button>
            </form>
      </BI_Content>
    </BI_Wrapper>
  );
}

export default BottomDynamic;
