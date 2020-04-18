import React from 'react'

import './TrackSection.sass'

import Track from '../Track/Track'

const TrackSection = props => {
  const tracks = [1,2,3,4,5,6]
  return (
    <div className="TrackSection">
      <h2 className="TrackSection__title">What's there?</h2>
      <div className="TrackSection__container">
        {tracks.map(track => 
          <Track 
          key={track.toString()}
          title="Front-End Development" 
          body="Short description of Front-end dev, including what it is, where is it used for and what are some cool examples of said development. Something to get people interested!"/>)}
      </div>
    </div>
  )
}

export default TrackSection