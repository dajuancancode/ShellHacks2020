import React from 'react'
import history from '../../history'
import SignUpForm from '../../Components/SignUpForm'
import ShellHacksLogo from '../../assets/branding/ShellHacks-title.svg'
import AuthStore from '../../store/AuthStore'
import { AuthStoreConsumer } from '../../store/AuthStore/Context'

import './styles.sass'

const SignUpPage = ({ store }) => {
  const handleReturn = e => {
    e.preventDefault()
    history.push('/')
  }
  const handleSubmit = async data => {
    const success = await store.signUp(data)
    if (success) history.push('/dashboard')
  }
  return (
    <div className="SignUpPage">
      <div className="SignUpPage__form-container">
        <div className="SignUpPage__cta">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <a href="/">
            <img
              className="SignUpPage__title"
              src={ShellHacksLogo}
              alt="shellhacks-hackathon-logo"
              href="/home"
            />{' '}
          </a>
          <br></br>
          <br></br>
          <p className="SignUpPage__sub-title">Let's get started!</p>
          <p className="SignUpPage__text">Please fill out the form to create your account</p>
        </div>
        <SignUpForm
          {...{
            handleReturn,
            handleSubmit,
            loading: store.loading,
            error: store.error
          }}
        />
      </div>
      <div className="SignUpPage__footer"></div>
    </div>
  )
}

// inject store into page
const HOC = () => (
  <AuthStore>
    <AuthStoreConsumer>{store => <SignUpPage store={store} />}</AuthStoreConsumer>
  </AuthStore>
)

export default HOC
