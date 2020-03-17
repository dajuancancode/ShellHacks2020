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
              <a
                href="https://shellhacks.typeform.com/to/zxFTkk"
                role="button"
                className="pre-register-btn"
              >
                Pre-Register Now!
              </a>
              <div className="button-container">
                <a
                  href="mailto:upe@fiu.edu?Subject=Shellhacks%202020%20sponsor%20interest%20form"
                  target="_top"
                >
                  Sponsor
                </a>
                <a href="https://2019.shellhacks.net" rel="_blank">
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
