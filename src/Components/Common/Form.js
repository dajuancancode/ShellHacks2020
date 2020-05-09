import React from 'react'
import cx from 'classnames'
import {Formik,Form as FormikForm} from 'formik'
import Input from './Input'

const Form = ({initialValues,validate,onSubmit,inputs,buttonText,className="",fieldValidation={},Component}) =>{
  const defaultValidation = ()=>{
    return {}
  }
  const classes = (c)=>{
    return cx('',{
      [className + '__' + c]: className,
      [c]: !className
    })
  }

  return (
    <Formik
    initialValues={initialValues}
    validate={validate ? validate : defaultValidation}
    onSubmit={onSubmit}
  >
  { (formik)=>(
    <>
    {/* Uncomment for debbuging */}
    {/* {JSON.stringify(formik.values)}
    {JSON.stringify(formik.errors)} */}
      <FormikForm className={className}>
        {inputs.map((input)=>(
          <>
          <Input
          {...input} 
          key={input.name} 
          handleChange={formik.handleChange} 
          value={formik.values[input.name]}
          {...(fieldValidation[input.name] ? {validate: fieldValidation[input.name]} : {})}
           />
           {formik.errors[input.name] && formik.touched[input.name] &&  <div className={classes('error')}>{formik.errors[input.name]}</div>}
           </>
        ))}
        <div className={classes('btn-container')}>
        <button type="submit"  className={classes('submit-btn')}>{buttonText}</button>
          {Component && <Component/>}
        </div>
      </FormikForm>
      </>
    )
  }
  </Formik>
  )
}


export default Form