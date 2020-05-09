import React from 'react'
import {Formik} from 'formik'
import Input from './Input'

const Form = ({initialValues,validate,onSubmit,inputs,buttonText,className="",fieldValidation={}}) =>{
  const defaultValidation = ()=>{
    return {}
  }
  return (
    <Formik
    initialValues={initialValues}
    validate={validate | defaultValidation}
    onSubmit={onSubmit}
  >
  { (formik)=>(
    <div className={className}>
      {inputs.map((input)=>(
        <Input 
        {...input} 
        key={input.name} 
        handleChange={formik.handleChange} 
        value={formik.values[input.name]}
        {...(fieldValidation[input.name] ? {validate: fieldValidation[input.name]} : {})}
         />
      ))}
      <button>{buttonText}</button>
    </div>
  )}
  </Formik>
  )
}


export default Form