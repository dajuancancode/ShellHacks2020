import React from 'react'
import history from '../../history'
import ApplicationForm from '../../Components/ApplicationForm'
import AuthStore from '../../store/AuthStore'
import {AuthStoreConsumer} from '../../store/AuthStore/Context'

import './styles.sass'

const ApplicationPage = ({store})=>{
  const handleSubmit = async (data)=> {
    const success = await store.signUp(data)
    if(success) history.push('/dashboard')
  }
  return (
    <div className="ApplicationPage">
      <div className="ApplicationPage__form-container">
      <div className="ApplicationPage__header">
      <p className="ApplicationPage__title">Application</p>
      <p className="ApplicationPage__sub-title">Please fill out this application to get into ShellHacks</p>
      </div>
        <ApplicationForm {...{
        handleSubmit,
        loading: store.loading,
        error: store.error
        }} />
      </div>
      <div className="ApplicationPage__footer">
      </div>
    </div>
  )
}


// inject store into page
const HOC = ()=>(
  <AuthStore>
    <AuthStoreConsumer>
      {(store)=> <ApplicationPage store={store}/>}
    </AuthStoreConsumer>
  </AuthStore>
)



export default HOC
