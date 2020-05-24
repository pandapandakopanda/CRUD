import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import ST from './index.scss'
import Button from '../Button'
// import store from '../../core/stores/authorizationStore'

@inject('store')
@observer
class Profile extends Component {
    redirectToLoginPage=() => {
      console.log('Working Log In')
      window.location.href = 'http://localhost:8080/#/login'
    }

    setAuthorizeToFalse=() => {
      console.log('Working Log Out')
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
        const { isAuthorized } = this.props.store.authorizationStore
        if (!isAuthorized) {
          setTimeout(() => {
            this.redirectToLoginPage()
          }, 800)
        }


        return (
          <div className={ST.profile}>
             Profile
            {' '}
            { isAuthorized ? `authorized as ${this.props.store.authorizationStore.currentUser.name}` : 'has not authorized' }
            {isAuthorized ? this.signOutButton : null}
          </div>
        )
      }
}

export default Profile
