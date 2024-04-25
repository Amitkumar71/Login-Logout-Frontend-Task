import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Profile from './components/profile';

import './App.css';

function App() {
  return (
      <Router>
        <div className='app'>   
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
