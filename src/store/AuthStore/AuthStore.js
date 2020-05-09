import React,{useState, useEffect} from 'react'
import {AuthStoreProvider} from './Context' 
import {IAMAPI} from '../../API'


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

  const getUser = async ()=>{
    loading.set(true)
    IAMAPI.getUser.then(({data})=>{
      user.set(data)
      loading.set(false)
    })
    .catch((err)=>{
      error.set(err)
      loading.set(false)
    })
  }

  const login = (email,password)=>{
    loading.set(true)
    IAMAPI.login(email,password);
  }


  const store={
    user,
    loading,
    error,
    getUser,
    login,
  }

return <AuthStoreProvider store={store}>{children}</AuthStoreProvider>

}