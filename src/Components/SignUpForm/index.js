import React from 'react'
import {validEmail,validString,validPassword} from '../Util/validation'
import Form from '../Common/Form'


const SignUpForm = ()=>{
  const inputs = [
    {
      name: 'email',
      icon: 'email',
      placeholder: 'Email Address',
      type:"email",
      id:"email",
    },
    {
      name: 'firstName',
      icon: 'person',
      placeholder: 'First Name',
      type:"firstName",
      id:"firstName",
    },
    {
      name: 'lastName',
      icon: 'person',
      placeholder: 'Last Name',
      type:"lastName",
      id:"lastName",
    },
    {
      name: 'password',
      icon: 'lock',
      placeholder: 'password',
      type:"password",
      id:"password",
    },
    {
      name: 'confirmPassword',
      icon: 'lock',
      placeholder: 'Confirm Password',
      type:"password",
      id:"confirmPassword",
    }
  ]

  const validateHelper = async (value,validator)=>{
    return await validator.validate(value).catch((err)=> err.errors[0])
  }

  const validate = (values)=>{
    const errors = {}
    if(values.password !== values.confirmPassword){
      errors.confirmPassword = "passwords must match"
    }
  }

  const fieldValidation = {
    email: async (email)=>{
      let error = await validateHelper(email,validEmail)
      return error
    },
    firstName: async (firstName)=>{
      let error = await validateHelper(firstName,validString)
      return error
    },
    lastName: async (lastName)=>{
      let error = await validateHelper(lastName,validString)
      return error
    },
    password: async (password)=>{
      let error = await validateHelper(password,validPassword)
      return error
    },
    confirmPassword: async (password)=>{
      let error = await validateHelper(password,validPassword)
      return error
    },
  }

  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  }

  const onSubmit = (values)=>{

  }

  return (
    <Form 
      initialValues={initialValues}
      validate={validate}
    />
  )
}