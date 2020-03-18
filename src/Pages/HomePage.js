import React from "react";
import "./HomePage.sass";
import discordLogo from "../assets/social-media/discord.svg";
import faceBookLogo from "../assets/social-media/facebook.svg";
import instagramLogo from "../assets/social-media/instagram.svg";
import twitterLogo from "../assets/social-media/twitter.svg";
import linkedinLogo from "../assets/social-media/linkedin.svg";
import ShellHacksLogo from "../assets/branding/ShellHacks-title.svg";
import futuristicBuilding from "../assets/branding/smart-city.svg";

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
              <a
                href="https://shellhacks.typeform.com/to/zxFTkk"
                role="button"
                className="pre-register-btn"
              >
                Pre-Register Now!
              </a>
              <div className="button-container">
                <a
                  className="sponsor-btn"
                  href="mailto:upe@fiu.edu?Subject=Shellhacks%202020%20sponsor%20inquiry"
                  target="_top"
                >
                  Sponsor
                </a>
                <a
                  className="old-site-btn"
                  href="https://shellhacks2019.netlify.com/"
                  rel="_blank"
                >
                  2019 Site
                </a>
              </div>
              <div className="social-media-container">
                <a href="http://discord.gg/upefiu" rel="_blank">
                  <img src={discordLogo} alt="discord-logo" />
                </a>
                <a href="https://www.facebook.com/upefiu/" rel="_blank">
                  <img src={faceBookLogo} alt="facebook-logo" />
                </a>
                <a href="https://www.instagram.com/upefiu/" rel="_blank">
                  <img src={instagramLogo} alt="instagram-logo" />
                </a>
                <a href="https://twitter.com/upefiu" rel="_blank">
                  <img src={twitterLogo} alt="twitter-logo" />
                </a>
                <a
                  href="https://www.linkedin.com/company/28673457"
                  rel="_blank"
                >
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
