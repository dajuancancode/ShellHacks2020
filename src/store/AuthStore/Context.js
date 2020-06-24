import { createContext } from 'react'

const AuthStore = createContext({})
export const AuthStoreProvider = AuthStore.Provider
export const AuthStoreConsumer = AuthStore.Consumer
