import React from 'react';
import HomePage from './Pages/HomePage'
import "./App.sass"
import AboutSection from './Components/About'

function App() {
  return (
      <div className="background">
        <HomePage />
        <AboutSection />
      </div>
  );
}

export default App;
