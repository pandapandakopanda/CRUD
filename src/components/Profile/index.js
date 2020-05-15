import React, { Component } from 'react'
import ST from './index.scss'
import Button from '../Button'
import store from '../stores/authorizationStore'
import {observer} from 'mobx-react'

@observer

class Profile extends Component {

    

    redirectToLoginPage=() => {
      console.log( 'Working Log In' )
      window.location.href = 'http://localhost:8080/#/login'
    }

    setAuthorizeToFalse=() => {
      console.log( 'Working Log Out' )
      localStorage.isAuthorized = false
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

        const isAuthorized = store.init()
        console.log('isAuthorized on profile page: ', isAuthorized)
        
        return (
          <div className={ST.profile}>
                Profile {isAuthorized ? 'authorized' : 'has not authorized'}   
            {isAuthorized ? this.signOutButton : this.signInButton }
          </div>
        )
      }
}

export default Profile
