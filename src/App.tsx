import React from 'react';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './screens/mainPage';
import { WelcomePage } from './screens/welcomePage'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/game' element={<Main />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
