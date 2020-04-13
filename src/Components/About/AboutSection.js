import React from 'react'
import "./About.sass"
import placeholder from './placeholder.png'

const AboutSection = props => {
  return (
    <div className="AboutSection">
      <div className="AboutSection__image">
        <img src={placeholder} alt="Computer Block" />
      </div>
      <div className="AboutSection__content">
        <h2 className="title">What's the Scoop?</h2>
        <p className="information">
          Are you ready for a weekend full of learning, innovation and fun? Come join us at ShellHacks, Florida's Largest Hackathon. Explore our tech city through our various interactive workshops, fun activities, networking opportunites and more. Create innovative projects and meet students from across the nations as we showcase the various technologies used around the city
        </p>
        <div className="AboutSection__content__details">
          <ul className="detail_list">
            <li className="detail learn">
              <strong>Learn</strong> from 20+ workshops covering topics such as cybersecurity, hardware, game development and more!
            </li>
            <li className="detail relax">
              <strong>Relax</strong> and sit back with other participants as you join us in one of our various activities.
            </li>
            <li className="detail treat">
              <strong>Treat</strong> yourself to some of our "Miami" cuisine and more
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutSection