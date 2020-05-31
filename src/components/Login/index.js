/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import St from './index.scss'
import Button from '../Button'
import store from '../../core/stores/authorizationStore'


@observer
class Login extends Component {
    state = {
      color: '',
    }

    registration =() => {
      store.addNewUser()
      this.toggle()
    }

    getData=() => {
      store.checkLogin().then(
        (isSuccess) => {
          this.setState({ color: isSuccess ? St.green : St.red })
          setTimeout(() => {
            this.setState({ color: '' })
            if (isSuccess)window.location.href = 'http://localhost:8080/#/profile'
          }, 1000)
        },
      )
    }


    getLogin = (ev) => {
      const { value } = ev.target
      store.setLogin(value)
    }

    getName = (ev) => {
      const { value } = ev.target
      store.setName(value)
    }

    getEmail = (ev) => {
      const { value } = ev.target
      store.setEmail(value)
    }

    getPassword = (ev) => {
      const { value } = ev.target
      store.setPassword(value)
    }


    toggle =() => {
      if (store.error === null) store.toggleRegistrationForm()
    }

    redirectToProfilePage=() => {
      window.location.href = 'http://localhost:8080/#/profile'
    }

    isLoginButVisible = (isLoading) => {
      if (!store.isRegistrationOpen) {
        return (
          <Button
            className={St.submit}
            onClick={this.getData}
          >
            Sign in
            <div className={isLoading ? St.loading : St.loadingHide} />
          </Button>
        )
      } return ''
    }

    render() {
      const { isAuthorized } = store
      if (isAuthorized) {
        setTimeout(() => {
          this.redirectToProfilePage()
        }, 200)
      }
      const hiddenInputClassName = (store.isRegistrationOpen) ? '' : St.hidden
      const regButName = (store.isRegistrationOpen) ? 'Submit' : 'Registration'
      const regButOnclick = (store.isRegistrationOpen) ? this.registration : this.toggle
      const { isLoading } = store
      const loginButton = this.isLoginButVisible(isLoading)

      return (

        <div className={St.login}>
          <div className={this.state.color}>
                    Login:
            <input
              type="text"
              onChange={this.getLogin}
              value={store.login}
            />
          </div>
          <div className={this.state.color}>
                    Password:
            <input
              type="password"
              onChange={this.getPassword}
              value={store.password}
            />
          </div>
          <div className={hiddenInputClassName}>
              Name:
            <input type="text" onChange={this.getName} value={store.name} />
          </div>
          <div className={hiddenInputClassName}>
              E-mail:
            <input type="text" onChange={this.getEmail} value={store.email} />
          </div>
          {loginButton}
          <Button
            className={St.submit}
            onClick={regButOnclick}
          >
            {regButName}
          </Button>
          <p className={St.error}>{store.error}</p>

        </div>
      )
    }
}

export default Login
