import React from "react";
import HomePageHero from "../../Components/HomePageHero";
import About from '../../Components/About'
import TrackSection from '../../Components/TrackSection'
import './styles.sass'

const HomePage = () => {
  return (
   <div className="HomePage">
    <HomePageHero />
    <About />
    <TrackSection/>
   </div>
  );
};

export default HomePage;
