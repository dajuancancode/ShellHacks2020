import React, { useState } from 'react'
import AuthPage from '../../Shells/AuthPage'
import DashboardContainer from '../../Shells/DashboardContainer'
import ApplicationStore from '../../store/ApplicationStore/'
import { ApplicationStoreConsumer } from '../../store/ApplicationStore/Context'
import './styles.sass'

const ProfilePage = ({ store }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [emailError, setEmailError] = useState('')

  const resendVerificationEmail = e => {
    e.preventDefault()
    setEmailError('')
    store.resendVerificationEmail().then(message => {
      setEmailError(message)
    })
  }
  return (
    <DashboardContainer isOpen={isOpen} setIsOpen={setIsOpen} page="profile">
      <div className="ProfilePage">
        <div className="DashboardPage__header">
          <h3>{`${store.user?.firstName} ${store.user?.lastName}`}</h3>
          <p>Application Status: {store?.application ? store.application.status : 'Not Applied'}</p>
          {!store.user?.verified && (
            <>
              <br />
              <p>
                Email has not been verfied <br />
              </p>
              <a href="/application">
                <button onClick={resendVerificationEmail} className="verify-email">
                  Verify email
                </button>
              </a>
              <br />
              {emailError && <p>{emailError}</p>}
            </>
          )}
        </div>
        <div className="ProfilePage__body">
          <div className="ProfilePage__schedule">
            <div className="ProfilePage__schedule-header">
              <h3>My Schedule</h3>
            </div>
            <br />
            <p>Events that are favorited by you will appear here.</p>
          </div>
        </div>
      </div>
    </DashboardContainer>
  )
}

const HOC = props => (
  <ApplicationStore>
    <ApplicationStoreConsumer>
      {store => <ProfilePage store={{ ...store, ...props.store }} />}
    </ApplicationStoreConsumer>
  </ApplicationStore>
)
export default () => <AuthPage Component={HOC} />
