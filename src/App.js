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

import GuessHistory from './Components/GuessHistory/GuessHistory';
import GenericBox from './Components/GenericBox/GenericBox';
import { AuthProvider, useAuth } from './Components/Auth/AuthProvider';

export const GlobalContext = React.createContext();


function App() {
  //Used for filtering content categories
  const [categoryFilter, set_categoryFilter] = useState("All");
  
  const [bottomUIopen, set_bottomUIopen] = useState(false);
  const [loginUIopen, set_loginUIopen] = useState(false);

  const [userLoggedIn, set_userLoggedIn] = useState(false);
  const [eventchoosen, set_eventchoosen] = useState([0,0]);

   const loginInfo = useAuth()
  const [serverData_question, set_serverData_question] = useState(null);

  useEffect(() => {
      fetch("http://localhost:3000/api/questions")
       .then(res => {return res.json()})
       .then(data => {
        set_serverData_question(data);
      })}, [])

  return (

    <div className="App">
      <BrowserRouter>
        <GlobalContext.Provider
          value={{
            categoryFilter,
            set_categoryFilter,
            bottomUIopen,
            set_bottomUIopen,
            loginUIopen,
            set_loginUIopen,
            serverData_question,
            eventchoosen,
            set_eventchoosen,
            userLoggedIn,
            set_userLoggedIn
          }}
        >


{userLoggedIn
        ? <HeaderLogged />
        : <Header  /> 
      }


          {<Navigation /> }
         
         
          {serverData_question
        ?
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/politics" element={<Main />} />
            <Route path="/economy" element={<Main />} />
            <Route path="/gossip" element={<Main />} />
            <Route path="/tech" element={<Main />} />
            <Route path="/all" element={<Main />} />
          
            <Route path="/guessHistory" element={<GuessHistory />} />
          </Routes> : <></> }


          
          <Footer />
          <AuthProvider>
            { bottomUIopen ? <SignupBox />: <></>}
            { loginUIopen ? <LoginBox/>: <></>}

        
          </AuthProvider>

          {serverData_question
        ?
          <GenericBox  questionTitle = "EXAMPLE QUESTION" userAnswer = "EXAMPLE ANSWER" rewardModifier = "EXAMPLE REWARD" userMoney = "YOUR MONEY" /> 
          : <></> }

        </GlobalContext.Provider>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
