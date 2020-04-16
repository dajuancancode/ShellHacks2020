import React from 'react';
// import './App.css';
import HomePage from './Pages/HomePage'
import AboutSection from './Components/About/AboutSection'
import "./App.sass"

function App() {
  return (
      <div className="background">
        <HomePage />
        <AboutSection />
      </div>
  );
}

export default App;
