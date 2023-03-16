import './Global.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Main from './Components/Main'
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import BottomInfo from './Components/BottomInfo'

export const GlobalContext = React.createContext();


function App() {
  //Used for filtering content categories
  const [categoryFilter, set_categoryFilter] = useState("All");
  const [bottomUIopen, set_bottomUIopen] = useState(false);
  const [userGuessChoosen, set_userGuessChoosen] = useState([1, 2, 3]);


  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContext.Provider
          value={{
            categoryFilter,
            set_categoryFilter,
            bottomUIopen,
            set_bottomUIopen,
            userGuessChoosen, 
            set_userGuessChoosen
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
          { bottomUIopen ? <BottomInfo/>: <></>}
  
        </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
