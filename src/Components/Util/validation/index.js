import * as yup from 'yup';


export const validEmail = (
  invalidEmail= "Field must be a valid email",
  requiredField="Email is required"
  ) =>{
  return yup.string().email(invalidEmail).required(requiredField)
}

export const validString = (
  max="Field cannot be longer than 20 characters",
  requiredField="This field is required"
  )=>{
  return yup.string().max(20,max).required(requiredField)
}

export const validPassword = (
  min="Password must be a minimum of 8 characters",
  max="Password cannot be longer than 20 character",
  ) =>{
  return yup
  .string()
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
  ,"Password must have atleast one uppercase letter, lowercase letter, one number and one special character")
  .min(8,min)
  .max(20,max)
}