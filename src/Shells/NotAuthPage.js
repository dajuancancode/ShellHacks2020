import React, { useEffect } from 'react'
import history from '../history'
import AuthStore from '../store/AuthStore/'
import { AuthStoreConsumer } from '../store/AuthStore/Context'
import LoadingPage from '../Pages/Loading'
import { getAuthToken } from '../utils'

const AuthPage = ({ store, Component }) => {
  useEffect(() => {
    if (!store.user) {
      store.getUser().then(success => {
        if (!success) {
          history.push('/login')
        }
      })
    }
  }, [store])

  if (store.loading) {
    return <LoadingPage />
  }
  return <Component store={store} />
}

const HOC = ({ Component }) => (
  <AuthStore>
    <AuthStoreConsumer>
      {store => <AuthPage store={store} Component={Component} />}
    </AuthStoreConsumer>
  </AuthStore>
)

export default HOC
