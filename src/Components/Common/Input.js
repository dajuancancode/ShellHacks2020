import React from 'react'
import {Field} from 'formik'
import cx from 'classNames'

const Input = (props)=>{
  switch(props.type){
    default:
      return <TextInput {...props} />
  }
}


const TextInput = ({name,value,label,placeholder,className,type,id,onChange,validate})=>{
  const TextInputClasses = cx("TextInput",{
    [className]: className
  })
 return (
  <div className={TextInputClasses}>
    {label && <label htmlFor={name} >{label}</label>}
    <Field 
    type={type}
    name={name} 
    id={id} 
    value={value}  
    placeholder={placeholder | ''}
    InputProps={{
      onChange:{onChange}
    }}
    {...(validate ? {validate} : {})}
    />
  </div>
 )
}

//{name,value,label,placeholder,className,type}
//dropdown
//text
//date
//file
//radio button