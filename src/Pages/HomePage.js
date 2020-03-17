import React from "react";
import "./HomePage.sass";
import discordLogo from "../assets/social-media/discord.png";
import faceBookLogo from "../assets/social-media/facebook.png";
import instagramLogo from "../assets/social-media/instagram.png";
import twitterLogo from "../assets/social-media/twitter.png";
import linkedinLogo from "../assets/social-media/linkedin.png";
import ShellHacksLogo from "../assets/branding/ShellHacks-title.png";
import futuristicBuilding from "../assets/branding/futuristic-city.png";

const HomePage = props => {
  return (
    <div className="HomePage">
      <div className="HomePage__header">
        <div className="header-inner">
          <div className="header-content">
            <img className="title" src={ShellHacksLogo} alt="shellhacks" />
            <div className="sub-title">
              <h4>Florida's Largest Hackathon</h4>
              <p>
                September 11 - 13th, 2020 <br />
                Florida International University, Miami, FL
              </p>
              <a href="#" role="button" className="pre-register-btn">
                Pre-Register Now!
              </a>
              <div className="button-container">
                <a href="#">Sponsor</a>
                <a href="#">2019 Site</a>
              </div>
              <div className="social-media-container">
                <a href="#">
                  <img src={discordLogo} alt="discord-logo" />
                </a>
                <a href="#">
                  <img src={faceBookLogo} alt="facebook-logo" />
                </a>
                <a href="#">
                  <img src={instagramLogo} alt="instagram-logo" />
                </a>
                <a href="#">
                  <img src={twitterLogo} alt="twitter-logo" />
                </a>
                <a href="#">
                  <img src={linkedinLogo} alt="linkedin-logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="city">
            <img src={futuristicBuilding} alt="futuristic-building" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
