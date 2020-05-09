import React from 'react'
import SignUpForm from '../../Components/SignUpForm'
import ShellHacksLogo from "../../assets/branding/ShellHacks-title.svg";

const SignUpPage = ()=>{
  return (
    <div className="SignUpPage">
      <div className="SignUpPage__cta">
      <img className="SignUpPage__title" src={ShellHacksLogo} alt="shellhacks-hackathon-logo" />
      <p className="SignUpPage__sub-title">Welcome!</p>
      <p className="SignUpPage__text">You're almost there! fill out your form info and click the button below.</p>
      </div>
      <SignUpForm />
    </div>
  )
}



export default SignUpPage
