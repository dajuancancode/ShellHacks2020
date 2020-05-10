import React, { useState } from 'react'

import "./FAQ.sass"

const FAQ = ({name, body}) => {

  const [visibility, setVisibility] = useState(false)

  const handleClick = () => setVisibility(!visibility)

  return (
    <div className="FAQ" onClick={handleClick}>
      <h1 className={["FAQ__title", (visibility ? "FAQ__title--colorBackground" : "FAQ__title--transBackground")].join(" ")}>
        {name}
      </h1>
      <div className={["FAQ__body", (visibility ? "FAQ__body--visible" : "FAQ__body--hidden")].join(" ")}>
        <p className="FAQ__text">{body}</p>
      </div>
    </div>
  )
}

export default FAQ