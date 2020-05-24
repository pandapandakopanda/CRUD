import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { axios } from 'axios'
import Button from '../Button'
import ST from './index.scss'

@inject('store')
@observer

class Registration extends Component {
  userInfarmation={
    login: '',
    password: '',
    name: '',
    email: '',
  }

  getName = (ev) => {
    this.userInfarmation.name = ev.target.value
  }

  getLogin = (ev) => {
    this.userInfarmation.login = ev.target.value
  }

  getPassword = (ev) => {
    this.userInfarmation.password = ev.target.value
  }

  getEmail = (ev) => {
    this.userInfarmation.email = ev.target.value
  }


  render() {
    return (
      <div className={ST.registration}>
        <div>
          Login:
          <input type="text" onChange={this.getLogin} />
        </div>
        <div>
          Name:
          <input type="text" onChange={this.getName} />
        </div>
        <div>
          Password:
          <input type="password" onChange={this.getPassword} />
        </div>
        <div>
          E-mail:
          <input type="text" onChange={this.getEmail} />
        </div>
        <Button className={ST.submit}>
          Submit
        </Button>
      </div>
    )
  }
}

export default Registration
