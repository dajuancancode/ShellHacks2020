import React from "react";
import HomePageHero from "../../Components/HomePageHero";
import About from '../../Components/About'
import TrackSection from '../../Components/TrackSection'
import './styles.sass'

const HomePage = () => {
  return (
   <>
    <HomePageHero />
    <About />
    <TrackSection/>
   </>
  );
};

export default HomePage;
