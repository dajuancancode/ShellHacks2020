import React,{useState} from 'react'
import {AuthStoreProvider} from './Context' 
import IAMAPI from '../../API/IAMAPI'


const createState = (uState) =>{
  return (initialValue)=>{
    const [value,set] = uState(initialValue)
    return {value,set}
  }
}

export default ({children})=>{
  const st = createState(useState)
  const user = st(null);
  const loading = st(false);
  const error = st('')


  const signUp = (data)=>{
    loading.set(true)
    error.set('')
   return IAMAPI.signUp(data).then(({data})=>{
      loading.set(false)
      localStorage.setItem('ShellHacks-Auth',data.token)
      return true
    }).catch((err)=>{
      loading.set(false)
      error.set(err.response ? err.response.data.message : 'There was an error,please try again later')
    })
    
  }

  const getUser = async ()=>{
    loading.set(true)
    error.set('')
    return IAMAPI.getUser().then((data)=>{
      user.set(data)
      loading.set(false)
      return true
    })
    .catch((err)=>{
      error.set(err)
      loading.set(false)
    })
  }

  const login = (payload)=>{
    loading.set(true)
    error.set('')
    return IAMAPI.login(payload).then( (data) => {
      loading.set(false)
      localStorage.setItem('ShellHacks-Auth', data.token)
      return true
    }).catch((err) => {
      loading.set(false)
      error.set(err.response ? err.response.data.message : 'There was an error,please try again later')
    })
  }


  const store={
    user: user.value,
    loading: loading.value,
    error: error.value,
    getUser,
    login,
    signUp
  }

return <AuthStoreProvider value={store}>{children}</AuthStoreProvider>

}