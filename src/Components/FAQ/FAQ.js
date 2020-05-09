import React, { useState } from 'react'

import styles from "./FAQ.module.sass"

const FAQ = ({name, body}) => {

  const [visibility, setVisibility] = useState(false)

  const handleClick = () => setVisibility(!visibility)

  return (
    <div className={styles.FAQ} onClick={handleClick}>
      <h1 className={[styles.FAQ__title, (visibility ? styles["FAQ__title--colorBackground"] : styles["FAQ__title--transBackground"])].join(" ")}>
        {name}
      </h1>
      <div className={[styles.FAQ__body, (visibility ? styles["FAQ__body--visible"] : styles["FAQ__body--hidden"] )].join(" ")}>
        <p className={styles.FAQ__text}>{body}</p>
      </div>
    </div>
  )
}

export default FAQ