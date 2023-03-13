import './Global.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main'
import Navigation from './components/Navigation';
import Footer from './components/Footer';



function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/politics" element={<Main/>}/>
      <Route path="/economy" element={<Main/>}/>
      <Route path="/sports" element={<Main/>}/>
      <Route path="/news" element={<Main/>}/>
      <Route path="/gossip" element={<Main/>}/>
      <Route path="/tech" element={<Main/>}/>
      <Route path="/all" element={<Main/>}/>
      <Route path="/market" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
   <Footer/>
    </div>
  );
}

export default App;
