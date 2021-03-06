/* eslint-disable react/sort-comp */
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import ST from './index.scss'
import Button from '../Button'
// import store from '../../core/stores/authorizationStore'

@inject('store')
@observer
class Profile extends Component {
    redirectToLoginPage=() => {
      window.location.href = 'http://localhost:8080/#/login'
    }

    setAuthorizeToFalse=() => {
      this.props.store.authorizationStore.setIsAuthorized(false)
    }

    signOutButton = (
      <Button
        className={ST.sign}
        onClick={this.setAuthorizeToFalse}
      >
                          Sign Out
      </Button>
      )

      signInButton = (
        <Button
          className={ST.sign}
          onClick={this.redirectToLoginPage}
        >
                        Sign In
        </Button>
      )

      render() {
        const { authorizationStore } = this.props.store
        const { isAuthorized } = authorizationStore
        if (!isAuthorized) {
          setTimeout(() => {
            this.redirectToLoginPage()
          }, 800)
        }


        return (
          <div className={ST.profile}>
             Profile
            {' '}
            { isAuthorized ? `authorized as ${authorizationStore.currentUser.name}`
              : 'has not authorized' }
            {isAuthorized ? this.signOutButton : null}

          </div>
        )
      }
}

export default Profile
