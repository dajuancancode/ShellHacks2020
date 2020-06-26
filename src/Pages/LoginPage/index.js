import React from 'react'
import history from '../../history'
import LoginForm from '../../Components/LoginForm'
import ShellHacksLogo from '../../assets/branding/ShellHacks-title.svg'
import AuthStore from '../../store/AuthStore'
import { AuthStoreConsumer } from '../../store/AuthStore/Context'

import './styles.sass'

const LoginPage = ({ store }) => {
  const handleCreateAccount = () => {
    history.push('/signUp')
  }
  const handleForgotPassword = () => {
    history.push('/resetPassword')
  }
  const handleSubmit = async data => {
    const success = await store.login(data)
    if (success) history.push('/dashboard')
  }
  return (
    <div className="LoginPage">
      <div className="LoginPage__form-container">
        <div className="LoginPage__cta">
          <br></br>
          <br></br>
          <img className="LoginPage__title" src={ShellHacksLogo} alt="shellhacks-hackathon-logo" />
          <br></br>
          <br></br>
          <p className="LoginPage__sub-title">Welcome Back!</p>
          <p className="LoginPage__text">
            
          </p>
        </div>
        <LoginForm
          {...{
            handleCreateAccount,
            handleForgotPassword,
            handleSubmit,
            loading: store.loading,
            error: store.error
          }}
        />
      </div>
      <div className="LoginPage__footer"></div>
    </div>
  )
}

// inject store into page
const HOC = () => (
  <AuthStore>
    <AuthStoreConsumer>{store => <LoginPage store={store} />}</AuthStoreConsumer>
  </AuthStore>
)

export default HOC
