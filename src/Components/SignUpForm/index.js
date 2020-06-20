import React from 'react'
import {object,reach} from 'yup'
import {validEmail,validString,validPassword} from '../Util/validation'
import Form from '../Common/Form'
import './styles.sass'


const SignUpForm = (props)=>{
  const inputs = [
    {
      name: 'email',
      icon: 'email',
      placeholder: 'Email Address',
      type:"email",
      id:"email",
      label: "Email Address"
    },
    {
      name: 'firstName',
      icon: 'person',
      placeholder: 'First Name',
      type:"firstName",
      id:"firstName",
      label: "First Name"
    },
    {
      name: 'lastName',
      icon: 'person',
      placeholder: 'Last Name',
      type:"lastName",
      id:"lastName",
      label: "Last Name"
    },
    {
      name: 'password',
      icon: 'lock',
      placeholder: 'password',
      type:"password",
      id:"password",
      label: "Password"
    },
    {
      name: 'confirmPassword',
      icon: 'lock',
      placeholder: 'Confirm Password',
      type:"password",
      id:"confirmPassword",
      label: "Confirm Password"
    }
  ]

  inputs.forEach((input)=>{
    input.className = "SignUpForm__input"
  })


  const validate = (values)=>{
    const errors = {}
    if(values.password !== values.confirmPassword){
      errors.confirmPassword = "passwords must match"
    }
    return errors
  }


  const schema = object().shape({
    email: validEmail(),
    firstName: validString(),
    lastName: validString(),
    password: validPassword(),
    // confirmPassword: validPassword()
  })

  const validateHelper = async (value,path)=>
    reach(schema,path).validate(value)
    .then(()=>null)
    .catch((err)=> {
     return err.errors[0]
     })


  const fieldValidation = {
    email: async (email)=> await validateHelper(email,'email'),
    firstName: async (firstName)=> await validateHelper(firstName,'firstName'),
    lastName: async (lastName)=> await validateHelper(lastName,'lastName'),
    password: async (password)=> await validateHelper(password,'password'),
  }

  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  }

  const onSubmit = ({confirmPassword,...values})=>{
    props.handleSubmit(values)
  }
  
  const Footer = () => (
    <>
    <button onClick={props.handleReturn} className="SignUpForm__return-btn">
        Return
    </button>
        <a className="SignUpForm__login-btn" href="/login">Already have an account? click here to sign in</a>
    </>
  )

  return (
    <Form 
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      inputs={inputs}
      buttonText={"Submit"}
      className="SignUpForm"
      fieldValidation={fieldValidation}
      Component={Footer}
      store={props}
    />
  )
}

export default SignUpForm