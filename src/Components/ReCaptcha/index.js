import React from 'react'
import ReCAPTCHALib from 'react-google-recaptcha'

const ReCAPTCHA = ({ shouldShow, onChange, captchaRef }) => {
  console.log(captchaRef)

  return (
    (shouldShow && (
      <ReCAPTCHALib sitekey={process.env.REACT_APP_CAPTCHA} onChange={onChange} ref={captchaRef} />
    )) || <></>
  )
}

export default ReCAPTCHA
