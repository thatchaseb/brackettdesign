import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CodingBody from './components/CodingBody'
import ViolinBody from './components/ViolinBody'
import MainPage from './components/MainPage'


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path ="/coding" element={<CodingBody/>} />
        <Route path="/violin" element={<ViolinBody/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    

  );
}

export default App;
