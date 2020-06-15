import React, { Component } from 'react'
import cx from 'classnames'
import './styles.sass'

class DashboardContainer extends Component {
  menuItemClasses = page => {
    return cx('DashboardContainer__menu-items', {
      highlighted: this.props.page === page
    })
  }

  render() {
    return (
      <div className="DashboardContainer">
        {this.props.isOpen ? (
          <div className="DashboardContainer__menu">
            <ul className="DashboardContainer__items">
              <a href="/dashboard">
                <li className={this.menuItemClasses('dashboard')}>Dashboard</li>
              </a>
              <a href="/application">
                <li className={this.menuItemClasses('application')}>Application</li>
              </a>
              <a href="/profile">
                <li className={this.menuItemClasses('profile')}>Profile</li>
              </a>
            </ul>
            <div className="DashboardContainer__close-menu-btn">
              <button onClick={() => this.props.setIsOpen(false)}>x</button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => this.props.setIsOpen(true)}
            className="DashboardContainer__menu-btn"
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        )}
        <div className="DashboardContainer__body">{this.props.children}</div>
      </div>
    )
  }
}

export default DashboardContainer
