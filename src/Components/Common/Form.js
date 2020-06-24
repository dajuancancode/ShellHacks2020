import React from 'react'
import cx from 'classnames'
import { Formik, Form as FormikForm } from 'formik'
import Input from './Input'
import Loading from './Loading'

const Form = ({
  initialValues,
  validate,
  onSubmit,
  inputs,
  buttonText,
  className = '',
  fieldValidation = {},
  Component,
  store
}) => {
  const defaultValidation = () => {
    return {}
  }
  const classes = c => {
    return cx('', {
      [className + '__' + c]: className,
      [c]: !className
    })
  }
  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
        validate={validate ? validate : defaultValidation}
        onSubmit={onSubmit}
      >
        {formik => (
          <>
            {/* Uncomment for debbuging */}
            {/* {JSON.stringify(formik.values)}
            {JSON.stringify(formik.errors)} */}
            <FormikForm>
              {inputs.map(input => (
                <>
                  <Input
                    {...input}
                    key={input.name}
                    handleChange={formik.handleChange}
                    value={formik.values[input.name]}
                    errors={formik.errors[input.name]}
                    touched={formik.touched[input.name]}
                    {...(fieldValidation[input.name]
                      ? { validate: fieldValidation[input.name] }
                      : {})}
                  />
                </>
              ))}
              <div className={classes('btn-container')}>
                <button
                  type="submit"
                  onClick={formik.handleSubmit}
                  className={classes('submit-btn')}
                >
                  {buttonText}
                </button>
                {Component && <Component />}
              </div>
            </FormikForm>
          </>
        )}
        {'}'}
      </Formik>
      <div className={classes('status')}>
        {store.loading && <Loading />}
        {store.error && <div>{store.error}</div>}
      </div>
    </div>
  )
}

export default Form
