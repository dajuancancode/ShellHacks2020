import React from 'react'
import "./About.sass"
import About from '../../assets/branding/About.svg'
import relaxEmoji from '../../assets/emojis/1f5bc.svg'
import learnEmoji from '../../assets/emojis/1f4dd.svg'
import treatEmoji from '../../assets/emojis/1f379.svg'


const AboutSection = props => {
  return (
    <div className="AboutSection">
      <div className="AboutSection__image">
        <img src={About} alt ="About SVG"/>
      </div>
      <div className="AboutSection__content">
        <h2 className="title">What's the Scoop?</h2>
        <div className="information">
          <p>
            Are you ready for a weekend full of learning, innovation and fun? Come join us at ShellHacks, Florida's Largest Hackathon. Explore our tech city through our various interactive workshops, fun activities, networking opportunites and more. Create innovative projects and meet students from across the nations as we showcase the various technologies used around the city!
          </p>
        </div>
        <div className="AboutSection__content__details">
          <ul className="detail_list">
            <li className="detail learn">
              <i className="detail_icon">
                <img className="detail_icon_img" src={learnEmoji} alt="Learn"/>
              </i>
              <p><strong>Learn</strong> from 20+ workshops covering topics such as cybersecurity, hardware, game development and more!</p>
            </li>
            <li className="detail relax">
              <i className="detail_icon">
                <img className="detail_icon_img" src={relaxEmoji} alt="Learn"/>
                </i>
                <p><strong>Relax</strong> and sit back with other participants as you join us in one of our various activities.</p>
            </li>
            <li className="detail treat">
              <i className="detail_icon">
                <img className="detail_icon_img" src={treatEmoji} alt="Learn"/>
              </i>
              <p><strong>Treat</strong> yourself to some of our "Miami" cuisine and more</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutSection