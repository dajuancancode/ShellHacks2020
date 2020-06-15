import React, { useState, useEffect } from 'react'
import { ApplicationStoreProvider } from './Context'
import ApplicationAPI from '../../API/ApplicationAPI'

/**
 * Creates a new state hook
 * Note: unless we're abatracting something here we should just use `useState`... there are no benefit of having the extra wrapper function.
 *
 * @param {*} stateHook
 * @returns - state hook {value, setter}
 */
const useCreateState = initialValue => {
  const [value, set] = useState(initialValue)
  return { value, set } // This is unconventional, hooks should always return an array... should migrate later.
}

export default function ApplicationProvider({ children }) {
  const application = useCreateState(null)
  const loading = useCreateState(false)
  const error = useCreateState('')

  /**
   * Creates a new user application
   *
   * @param {Object} payload
   * @returns boolean
   */
  const create = payload => {
    loading.set(true)
    error.set('')

    return ApplicationAPI.createApplication(payload)
      .then(() => {
        loading.set(false)
        return true
      })
      .catch(err => {
        loading.set(false)
        error.set(
          err.response ? err.response.data.message : 'There was an error, please try again later'
        )
      })
  }

  const getApplication = userId => {
    loading.set(true)
    error.set('')
    ApplicationAPI.getApplication(userId)
      .then(({ data }) => {
        application.set(data)
      })
      .catch(err => {
        console.error(err)
      })
    loading.set(false)
  }

  useEffect(() => {
    getApplication()
  }, [])

  const store = {
    application: application.value,
    loading: loading.value,
    error: error.value,
    create
  }

  return <ApplicationStoreProvider value={store}>{children}</ApplicationStoreProvider>
}
