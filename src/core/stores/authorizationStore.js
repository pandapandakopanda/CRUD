/* eslint-disable class-methods-use-this */
import { action, observable } from 'mobx'
import { getServerData, checkLoginData } from './transport'

localStorage.isAuthorized = false


class Store {
    @observable isAuthorized = false

    constructor() {
      this.init()
    }

    @action init() {
      this.isAuthorized = this.getIsAuthorized()
    }

    getIsAuthorized() {
      return localStorage.isAuthorized === 'true'
    }

    @action setIsAuthorized(value) {
      this.isAuthorized = value
      localStorage.setItem('isAuthorized', value)
    }

    refreshLocalStorage() {
      const users = getServerData()
      if (!localStorage.users) localStorage.users = JSON.stringify({})
      localStorage.users = JSON.stringify(users)
    }

    checkLogin(data) {
      const result = checkLoginData(data)
      return result
    }

  /* getUserData(login) {
      if (!localStorage.users) localStorage.users = JSON.stringify({})
      const users = JSON.parse(localStorage.users)
      const userData = users[login]
      return (userData !== undefined) ? userData : false
    }

    checkData(user) {
      const existUser = this.getUserData(user.login)
      if (!existUser) return false
      const { login, password } = existUser

      const supposedUser = {
        login,
        password,
      }
      return JSON.stringify(user) === JSON.stringify(supposedUser)
    }

    checkDataAndAuthorized(user) {
      this.setIsAuthorized(this.checkData(user))
      return this.checkData(user)
    } */
}

const store = new Store()

export default store
export { Store }
