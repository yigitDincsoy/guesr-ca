import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main'
import Navigation from './components/Navigation';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
