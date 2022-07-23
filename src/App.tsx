import React from 'react';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GamePage } from './screens/gamePage';
import { WelcomePage } from './screens/welcomePage'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/game' element={<GamePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
