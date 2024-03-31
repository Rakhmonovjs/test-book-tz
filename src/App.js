import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/SignUP/Signup';
import Signin from './Components/SignIN/Signin';


function App() {
  return (
    <div className='container'>
    <Routes>
      
        <Route path="/" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      
    </Routes>
    </div>
  );
}

export default App;
