import React from "react";
import HomePageHero from "../../Components/HomePageHero";
import About from '../../Components/About'
import TrackSection from '../../Components/TrackSection'
import FAQ from '../../Components/FAQSection'
import './styles.sass'

const HomePage = () => {
  return (
   <div className="HomePage">
    <HomePageHero />
    <About />
    <TrackSection/>
    <FAQ />
   </div>
  );
};

export default HomePage;
