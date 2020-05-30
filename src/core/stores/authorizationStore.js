/* eslint-disable class-methods-use-this */
import { action, observable } from 'mobx'
import { getServerData, checkLoginData, fillUsersArray } from './transport'

localStorage.isAuthorized = false

class Store {
  @observable isAuthorized = false

  @observable isLoading = false

  currentUser = {}

  constructor() {
    this.init()
  }

  setCurrentUser(obj) {
    this.currentUser = obj
  }

  @ action setIsLoadingState(value) {
    this.isLoading = value
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
      this.setIsLoadingState(true)
      return checkLoginData(data).then((resp) => {
        console.log('resp: ', resp)
        this.setIsLoadingState(false)
        if (resp === null) {
          return false
        }
        /* user.setData(resp) */
        this.setCurrentUser(resp)
        console.log('resp: ', resp)
        this.setIsAuthorized(true)
        return true
      })
    }


    initializateDataBase() {
      const users = localStorage.users ? JSON.parse(localStorage.users) : []
      fillUsersArray(users)
    }
}

const store = new Store()

export default store
export { Store }
