import React from 'react'

import "../../sass/main.sass"
import "./Track.sass"

import TrackImage from "../../assets/branding/Track_Image.svg"

const Track = props => {
  return(
    <div className="Track">
      <img className="Track__img" src={TrackImage} alt="Track" />
      <div className="Track__body">
        <h4 className="Track__title">{props.title}</h4>
        <p className="Track__text">
          {props.body}
        </p>
      </div>
    </div>
  );
}

export default Track;