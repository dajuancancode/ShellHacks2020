import React from 'react'
import history from '../../history'
import SignUpForm from '../../Components/SignUpForm'
import ShellHacksLogo from "../../assets/branding/ShellHacks-title.svg";
import AuthStore from '../../store/AuthStore'
import {AuthStoreConsumer} from '../../store/AuthStore/Context'

import './styles.sass'

const SignUpPage = ({store})=>{
  const handleReturn = (e)=> {
    e.preventDefault()
    history.push('/')
  }
  const handleSubmit = async (data)=> {
    const success = await store.signUp(data)
    if(success) history.push('/dashboard')
  }
  return (
    <div className="SignUpPage">
      <div className="SignUpPage__form-container">
      <div className="SignUpPage__cta">
      <img className="SignUpPage__title" src={ShellHacksLogo} alt="shellhacks-hackathon-logo" />
      <p className="SignUpPage__sub-title">Welcome!</p>
      <p className="SignUpPage__text">You're almost there! fill out your <br></br> form info and click the button below.</p>
      </div>
      <SignUpForm {...{
        handleReturn,
        handleSubmit,
        loading: store.loading,
        error: store.error
        }} />
      </div>
      <div className="SignUpPage__footer">
      </div>
    </div>
  )
}


// inject store into page
const HOC = ()=>(
  <AuthStore>
    <AuthStoreConsumer>
      {(store)=> <SignUpPage store={store}/>}
    </AuthStoreConsumer>
  </AuthStore>
)



export default HOC
