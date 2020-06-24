import React from 'react'
import { object, reach, string } from 'yup'
import { validEmail } from '../Util/validation'
import Form from '../Common/Form'
import './styles.sass'

const ResetPasswordEmail = props => {
  const inputs = [
    {
      name: 'email',
      icon: 'email',
      placeholder: 'yourname@name.com',
      type: 'email',
      id: 'email',
      label: 'Email Address'
    }
  ]

  inputs.forEach(input => {
    input.className = 'ResetForm__input'
  })

  const schema = object().shape({
    email: validEmail()
  })

  const validateHelper = async (value, path) =>
    reach(schema, path)
      .validate(value)
      .then(() => null)
      .catch(err => {
        return err.errors[0]
      })

  const fieldValidation = {
    email: async email => await validateHelper(email, 'email')
  }

  const initialValues = {
    email: ''
  }

  const onSubmit = values => {
    props.handleSubmit(values)
  }

  return (
    <div className="ResetPasswordPage__container">
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        inputs={inputs}
        buttonText={'Submit'}
        className="ResetForm"
        fieldValidation={fieldValidation}
        store={props}
      />
      <div className="ResetForm__footer">
        <button className="ResetForm__home-btn" onClick={props.handleCreateAccount}>
          Home
        </button>
      </div>
    </div>
  )
}

export default ResetPasswordEmail
