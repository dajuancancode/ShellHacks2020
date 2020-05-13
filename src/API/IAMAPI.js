import axios from 'axios'
import { getAuthToken } from '../utils'

export const client = axios.create({
  baseURL: process.env.REACT_APP_IAM_BASE_ROUTE,
})

const IAMAPI = {
  signUp: (user) =>{
    return client.post('/users', user)
  },
  login: (payload) =>{
    return client.post('/users/login', payload).then(({data})=>{
      return data;
    })
  },
  getUser: ()=>{
    return client.get('/users/',{headers: {authorization: getAuthToken}}).then(({data})=>{
      return data;
    })
  },
  resetPasswordRequest: (email)=>{
    return client.post('/usersresetPasswordRequest',{email}).then(({data})=>{
      return data;
    })
  },
  resetPassword: (password,token)=>{
    return client.put('users/resetPassword', {password,token}).then(({data})=>{
      return data
    })
  }
  
}

export default IAMAPI