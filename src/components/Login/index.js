/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import axios from 'axios'
import St from './index.scss'
import Button from '../Button'
import store from '../../core/stores/authorizationStore'
import { checkLoginData } from '../../core/stores/transport'


@observer
class Login extends Component {
    state = {
      login: '',
      password: '',
      name: '',
      email: '',
      color: '',
      isRegOpen: false,
      error: null,
    }


    refresh =() => {
      const inputs = new Set(document.getElementsByTagName('input'))
      Array.from(inputs).forEach((el) => el.value = '')
    }

    registration =() => {
      const inputs = new Set(document.getElementsByTagName('input'))
      const empty = Array.from(inputs).filter((el) => el.value.length === 0)
      console.log('empty: ', empty)
      if (empty.length > 0) {
        this.setState({ error: 'Please fill all field' })
        return
      }
      this.setState({ error: null })

      const newUser = {
        login: this.state.login,
        password: this.state.password,
        name: this.state.name,
        email: this.state.email,

      }

      axios.post('/api/users', newUser)
        .then((res) => {
        })

      store.refreshLocalStorage()
      this.refresh()
      this.toggle()
    }

    getData=() => {
      const user = {
        login: this.state.login,
        password: this.state.password,
      }

      store.checkLogin(user)


      const compare = !!store.checkLogin(user)
      console.log('compare: ', compare)
      this.setState({ color: (compare) ? St.green : St.red })
      setTimeout(() => {
        this.setState({ color: '' })
        if (compare)window.location.href = 'http://localhost:8080/#/profile'
      }, 1000)
    }

    getLogin = (ev) => {
      const { value } = ev.target
      this.setState({ login: value })
    }

    getName = (ev) => {
      const { value } = ev.target
      this.setState({ name: value })
    }

    getEmail = (ev) => {
      const { value } = ev.target
      this.setState({ email: value })
    }

    getPassword = (ev) => {
      const { value } = ev.target
      this.setState({ password: value })
    }


    toggle =() => {
      const { isRegOpen } = this.state
      this.setState({ isRegOpen: !isRegOpen })
    }

    isLoginButVisible = () => {
      if (!this.state.isRegOpen) {
        return (
          <Button
            className={St.submit}
            onClick={this.getData}
          >
            Sign in
          </Button>
        )
      } return ''
    }

    render() {
      const hiddenInputClassName = (this.state.isRegOpen) ? '' : St.hidden
      const regButName = (this.state.isRegOpen) ? 'Submit' : 'Registration'
      const regButOnclick = (this.state.isRegOpen) ? this.registration : this.toggle
      const loginButton = this.isLoginButVisible()


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
