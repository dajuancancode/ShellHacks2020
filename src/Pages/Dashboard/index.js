import React, { useState } from 'react'
import AuthPage from '../../Shells/AuthPage'
import DashboardContainer from '../../Shells/DashboardContainer'
import ApplicationStore from '../../store/ApplicationStore/'
import { ApplicationStoreConsumer } from '../../store/ApplicationStore/Context'
import './styles.sass'

const DashBoard = ({ store }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <DashboardContainer isOpen={isOpen} setIsOpen={setIsOpen} page="dashboard">
      <div className="DashboardPage">
        <div className="DashboardPage__header">
          <h3>{`Welcome ${store.user?.firstName}!`}</h3>
          <div className="DashboardPage__application-status">
            APPLICATION STATUS: {store?.application ? store.application.status : 'Not Applied'}
          </div>
          <div className="DashboardPage__body">
            <div className="DashboardPage__schedule">
              <div className="DashboardPage__schedule-header">
                <h3>Announcements</h3>
              </div>
              <br />
              <p>No announments just yet, check back often to get the latest updates.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardContainer>
  )
}

const HOC = props => (
  <ApplicationStore>
    <ApplicationStoreConsumer>
      {store => <DashBoard store={{ ...store, ...props.store }} />}
    </ApplicationStoreConsumer>
  </ApplicationStore>
)
export default () => <AuthPage Component={HOC} />
