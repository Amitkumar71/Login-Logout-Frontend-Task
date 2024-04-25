import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
  return (
    <div>
      <div className="h-screen">
        <div className="text">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="btn">
          <Link to="/signup" className="create-Account">Create Account</Link>
          <Link to="/signin" className="Register">Already Registered? Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
