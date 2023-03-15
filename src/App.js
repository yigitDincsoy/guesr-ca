import './Global.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Main from './Components/Main'
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import InscreenGuesses from './Components/InscreenGuesses'


export const GlobalContext = React.createContext();


function App() {
  const [userSelection, set_userSelection] = useState("All");
  const [userGuessSelection, set_userGuessSelection] = useState(false);



  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContext.Provider
          value={{
            userSelection,
            set_userSelection,
            userGuessSelection,
            set_userGuessSelection,
          }}
        >
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/politics" element={<Main />} />
            <Route path="/economy" element={<Main />} />
            <Route path="/sports" element={<Main />} />
            <Route path="/news" element={<Main />} />
            <Route path="/gossip" element={<Main />} />
            <Route path="/tech" element={<Main />} />
            <Route path="/all" element={<Main />} />
            <Route path="/market" element={<Main />} />
          </Routes>
          <Footer />
          { userGuessSelection ? <InscreenGuesses/>: <></>}
  
        </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
