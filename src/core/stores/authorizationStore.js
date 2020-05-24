/* eslint-disable class-methods-use-this */
import { action, observable } from 'mobx'
import { getServerData, checkLoginData, fillUsersArray } from './transport'

localStorage.isAuthorized = false

class Store {
  @observable isAuthorized = false

  currentUser = {}

  constructor() {
    this.init()
  }

  setCurrentUser(obj) {
    this.currentUser = obj
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
      getServerData().then((users) => {
        if (!localStorage.users) localStorage.users = JSON.stringify({})
        localStorage.users = JSON.stringify(users)
      })
    }

    checkLogin(data) {
      return checkLoginData(data).then((resp) => {
        console.log('resp: ', resp)

        if (resp === null) {
          return false
        }

        /* user.setData(resp) */
        this.setCurrentUser(resp)
        this.setIsAuthorized(true)
        return true
      })

      /*
      this.setIsAuthorized(result)
      return result
      */
    }


    initializateDataBase() {
      const users = localStorage.users ? JSON.parse(localStorage.users) : []
      fillUsersArray(users)
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
