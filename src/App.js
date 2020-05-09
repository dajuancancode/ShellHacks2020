import React from 'react';
import HomePage from './Pages/HomePage'

import AboutSection from './Components/About/AboutSection'
import TrackSection from './Components/TrackSection/TrackSection'
import FAQ from './Components/FAQ/FAQ'

import "./App.sass"

function App() {
  return (
      <div className="background">
        <HomePage />
        <AboutSection />
        <TrackSection />
        <FAQ 
          name="What is a hackathon" 
          body="A hackathon is a weekend-long event where students come together to learn about the latest technologies and build innovative products. Hackathons also provide opportunities for students by giving them access to various workshops, fun activities and networking events. " />
         <FAQ 
          name="What is a hackathon" 
          body="A hackathon is a weekend-long event where students come together to learn about the latest technologies and build innovative products. Hackathons also provide opportunities for students by giving them access to various workshops, fun activities and networking events. " />
      </div>
  );
}

export default App;
