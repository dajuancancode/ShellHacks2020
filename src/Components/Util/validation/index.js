import * as yup from 'yup';


export const validEmail = (
  invalidEmail= "Field must be a valid email",
  requiredField="Email is required"
  ) =>{
  return yup().string().email(invalidEmail).isRequired(requiredField)
}

const validString = (
  max="Field cannot be longer than 20 characters",
  requiredField="This field is required"
  )=>{
  return yup.string().max(20,max).isRequired(requiredField)
}

export const validPassword = (
  min="Password must be a minimum of 8 characters",
  max="Password cannot be longer than 20 character",
  lowerCase="Password must contain at least one uppercase letter",
  upperCase="Password must contain at least one lowercase letter",
  digit="Password must contain at least one number",
  requiredField="password is required",
  ) =>{
  return yup()
  .string()
  .min(8,min)
  .max(20,max)
  .matches(/(?=.*[a-z])/,lowerCase)
  .matches((/?=.*[A-Z]/),upperCase)
  .matches(/(?=.*\d) /,digit)
  .isRequired(requiredField)
}