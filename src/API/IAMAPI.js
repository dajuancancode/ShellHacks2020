import axios from 'axios'

export const client = axios.create({
  baseURL: process.env.REACT_APP_IAM_BASE_ROUTE,
})

const IAMAPI = {
  signUp: (user) =>{
    return client.post('/users/createAccount', user)
  },
  login: (email,password) =>{
    return client.post('/users/login',{email,password}).then(({data})=>{
      return data;
    })
  },
  getUser: ()=>{
    return client.get('/users/').then(({data})=>{
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