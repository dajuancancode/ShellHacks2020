import React from 'react'
import SignUpForm from '../../Components/SignUpForm'
import AuthPage from '../../Shells/AuthPage'

const DashBoard = ()=>{
  return (<div style={{color:'#000'}}>
    <SignUpForm />
  </div>)
}




export default ()=>(
  <AuthPage>
    <DashBoard />
  </AuthPage>
)