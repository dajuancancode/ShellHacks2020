import React from "react";
import HomePageHero from "../../Components/HomePageHero";
import About from '../../Components/About'
import TrackSection from '../../Components/TrackSection'
import FAQSection from "../../Components/FAQSection/FAQSection"
import './styles.sass'

const HomePage = () => {
  return (
   <div className="HomePage">
    <HomePageHero />
    <About />
    <TrackSection/>
    <FAQSection />
   </div>
  );
};

export default HomePage;
