import React from 'react'

import "../../sass/main.sass"
import "./Track.sass"

import TrackImage from "../../assets/branding/Track_Image.svg"

const Track = props => {
  return(
    <div className="Track">
      <img className="Track__img" src={TrackImage} alt="Track Image" />
      <div className="Track__body">
        <h4 className="Track__title">Front-End Development</h4>
        <p className="Track__text">
          Short description of Front-end dev, including what it is, where is it used for and what are some cool examples of said development. Something to get people interested!
        </p>
      </div>
    </div>
  );
}

export default Track;