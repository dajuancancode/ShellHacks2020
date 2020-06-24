import React from 'react'
import { object, reach, string } from 'yup'
import { validEmail } from '../Util/validation'
import Form from '../Common/Form'

import './styles.sass'

const LoginForm = props => {
  const inputs = [
    {
      name: 'email',
      icon: 'email',
      placeholder: 'Email Address',
      type: 'email',
      id: 'email',
      label: 'Email Address'
    },
    {
      name: 'password',
      icon: 'lock',
      placeholder: 'password',
      type: 'password',
      id: 'password',
      label: 'Password'
    }
  ]

  inputs.forEach(input => {
    input.className = 'Login__input'
  })

  const schema = object().shape({
    email: validEmail(),
    password: string().required('Password is required')
  })

  const validateHelper = async (value, path) =>
    reach(schema, path)
      .validate(value)
      .then(() => null)
      .catch(err => {
        return err.errors[0]
      })

  const fieldValidation = {
    email: async email => await validateHelper(email, 'email'),
    password: async password => await validateHelper(password, 'password')
  }

  const initialValues = {
    email: '',
    password: ''
  }

  const onSubmit = values => {
    props.handleSubmit(values)
  }

  return (
    <div className="LoginPage__container">
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        inputs={inputs}
        buttonText={'Submit'}
        className="Login"
        fieldValidation={fieldValidation}
        store={props}
      />
      <div className="Login__footer">
        <button className="Login__create-account-btn" onClick={props.handleCreateAccount}>
          Create Account
        </button>
        <button className="Login__forgot-password-btn" onClick={props.handleForgotPassword}>
          Forgot Password?
        </button>
      </div>
    </div>
  )
}

export default LoginForm
