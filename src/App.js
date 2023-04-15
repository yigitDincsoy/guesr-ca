import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import HeaderLogged from './Components/HeaderLogged/HeaderLogged'
import Main from './Components/Main'
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import SignupBox from './Components/SignupBox/SignupBox'
import LoginBox from './Components/LoginBox/LoginBox'

import Login from './Components/Auth/Login'
import Signup from './Components/Auth/Signup'
import GuessHistory from './Components/GuessHistory/GuessHistory';
import GenericBox from './Components/GenericBox/GenericBox';

export const GlobalContext = React.createContext();


function App() {
  //Used for filtering content categories
  const [categoryFilter, set_categoryFilter] = useState("All");
  
  const [bottomUIopen, set_bottomUIopen] = useState(false);
  const [loginUIopen, set_loginUIopen] = useState(false);

  const [eventchoosen, set_eventchoosen] = useState(0);
  const [userGuessCart, set_userGuessCart] = useState([]);
  const [loggedIn, set_loggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContext.Provider
          value={{
            categoryFilter,
            set_categoryFilter,
            bottomUIopen,
            set_bottomUIopen,
            userGuessCart, 
            set_userGuessCart,
            set_loggedIn,
            set_loginUIopen
          }}
        >

{loggedIn
        ? <HeaderLogged />
        : <Header  /> 
      }
          {<Navigation /> }
          <Routes>
     
            <Route path="/" element={<Main />} />
          
            <Route path="/politics" element={<Main />} />
            <Route path="/economy" element={<Main />} />
            <Route path="/gossip" element={<Main />} />
            <Route path="/tech" element={<Main />} />
            <Route path="/all" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          
            <Route path="/guessHistory" element={<GuessHistory />} />
          </Routes>
          <Footer />
          { bottomUIopen ? <SignupBox />: <></>}
          
          { loginUIopen ? <LoginBox/>: <></>}


        </GlobalContext.Provider>
        {<GenericBox  questionTitle = "EXAMPLE QUESTION" userAnswer = "EXAMPLE ANSWER" rewardModifier = "EXAMPLE REWARD" userMoney = "YOUR MONEY" /> }
      </BrowserRouter>
    </div>
  );
}

export default App;
