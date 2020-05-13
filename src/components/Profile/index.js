import React, { Component } from 'react'
import ST from './index.scss'
import Button from '../Button'


class Profile extends Component {

    

    redirectToLoginPage=() => {
      console.log( 'Working Log In' )
      window.location.href = 'http://localhost:8080/#/login'
    }

    setAutorizeFalse=() => {
      console.log( 'Working Log Out' )
      localStorage.isAuthorized = false
    }

    signOutButton = (
      <Button 
        className={ST.sign}
        onClick={this.setAutorizeFalse}
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

        const { isAuthorized } = localStorage
        const setButtonType = () => ( ( isAuthorized ) ? this.signInButton : this.signOutButton )
        const currentButton = setButtonType()
        console.log('currentButton: ', currentButton);
       
        return (
          <div className={ST.profile}>
                Profile authorized {isAuthorized}   
            {currentButton}
          </div>
        )
      }
}

export default Profile
