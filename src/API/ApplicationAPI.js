import axios from 'axios'
import { getAuthToken } from '../utils'

const client = axios.create({
  baseURL: process.env.REACT_APP_APPLICATION_BASE_ROUTE
})

const ApplicationAPI = {
  /**
   * Posts application to api
   * @param data - application data
   * @returns Promise<response data>
   */
  createApplication: data => {
    const application = new FormData()

    Object.keys(data).forEach(key => {
      if (!data[key]) {
        data[key] = 'N/A'
      }

      application.append(key, data[key])
    })

    return client({
      method: 'post',
      url: '/application/create',
      data: application,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: getAuthToken()
      }
    })
  },
  getApplication: data => {
    return client.get('/application/get', {
      params: { userId: data.userId },
      headers: { Authorization: data.token }
    })
  }
}

export default ApplicationAPI
