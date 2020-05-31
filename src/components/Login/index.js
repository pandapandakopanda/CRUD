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
      isRegOpen: false,
      error: null,
    }


    refresh =() => {
      const inputs = new Set(document.getElementsByTagName('input'))
      Array.from(inputs).forEach((el) => el.value = '')
    }

    registration =() => {
      // is atleast one of fields empty?
      const inputs = new Set(document.getElementsByTagName('input'))
      const empty = Array.from(inputs).filter((el) => el.value.length === 0)
      if (empty.length > 0) {
        this.setState({ error: 'Please fill all field' })
        return
      }
      this.setState({ error: null })
      //------

      store.addNewUser()
      store.refreshLocalStorage()
      this.refresh()
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
      const { isRegOpen } = this.state
      this.setState({ isRegOpen: !isRegOpen })
    }

    redirectToProfilePage=() => {
      window.location.href = 'http://localhost:8080/#/profile'
    }

    isLoginButVisible = (isLoading) => {
      if (!this.state.isRegOpen) {
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
      const hiddenInputClassName = (this.state.isRegOpen) ? '' : St.hidden
      const regButName = (this.state.isRegOpen) ? 'Submit' : 'Registration'
      const regButOnclick = (this.state.isRegOpen) ? this.registration : this.toggle
      const { isLoading } = store
      const loginButton = this.isLoginButVisible(isLoading)

      return (

        <div className={St.login}>
          <div className={this.state.color}>
                    Login:
            <input
              type="text"
              onChange={this.getLogin}
            />
          </div>
          <div className={this.state.color}>
                    Password:
            <input
              type="password"
              onChange={this.getPassword}
            />
          </div>
          <div className={hiddenInputClassName}>
              Name:
            <input type="text" onChange={this.getName} />
          </div>
          <div className={hiddenInputClassName}>
              E-mail:
            <input type="text" onChange={this.getEmail} />
          </div>
          {loginButton}
          <Button
            className={St.submit}
            onClick={regButOnclick}
          >
            {regButName}
          </Button>
          <p className={St.error}>{this.state.error}</p>

        </div>
      )
    }
}

export default Login
