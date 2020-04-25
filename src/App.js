import React from 'react';
import HomePage from './Pages/HomePage'

import AboutSection from './Components/About/AboutSection'
import TrackSection from './Components/TrackSection/TrackSection'
import "./App.sass"

function App() {
  return (
      <div className="background">
        <HomePage />
        <AboutSection />
        <TrackSection />
      </div>
  );
}

export default App;
