import axios from 'axios'
import { getAuthToken } from '../utils'

export const client = axios.create({
  baseURL: process.env.REACT_APP_IAM_BASE_ROUTE
})

const IAMAPI = {
  signUp: user => {
    return client.post('/users', user)
  },
  login: payload => {
    return client.post('/users/login', payload).then(({ data }) => {
      return data
    })
  },
  getUser: () => {
    return client
      .get('/users/', { headers: { authorization: getAuthToken() } })
      .then(({ data }) => {
        return data
      })
  },
  resetPasswordRequest: email => {
    return client.post('users/resetPasswordRequest', { email }).then(({ data }) => {
      return data
    })
  },
  resetPassword: (password, token) => {
    return client.post('users/resetPassword', { password, token }).then(({ data }) => {
      return data
    })
  },
  verifyEmail: token => {
    return client.post('users/verifyEmail', { token }).then(({ data }) => data)
  },
  resendVerificationEmail: () => {
    return client
      .post('users/resendVerificationEmail', {}, { headers: { authorization: getAuthToken() } })
      .then(({ data }) => {
        return data
      })
  }
}

export default IAMAPI
