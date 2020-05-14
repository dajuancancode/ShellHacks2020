import React from 'react'
import AuthPage from '../../Shells/AuthPage'
import './styles.sass'

const DashBoard = ()=>{
  return (<div className="DashboardPage">
    hello
  </div>)
}




export default ()=>(
  <AuthPage Component={DashBoard}/>
)