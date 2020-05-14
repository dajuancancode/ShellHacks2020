import React,{useEffect} from 'react'
import history from '../history'
import {AuthStoreConsumer} from '../store/AuthStore'
import LoadingPage from '../Pages/Loading'


const AuthPage = ({store,children})=>{
  useEffect(()=>{
    store.loading.set(true)
    if(!store.user){
      store.getUser().then(()=>{
      }).catch(()=>{
        history.push('/')
      })
    }
    store.loading(false)
  },[])

  if(store.loading){
    return <LoadingPage />
  }
  return ({children})
}



export default ({Component}) =>{
  return <AuthStoreConsumer>
      {({store})=>{
        return <AuthPage store={store} Component={Component}/>
      }}
  </AuthStoreConsumer>
}