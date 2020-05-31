/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
import axios from 'axios'
import { action, observable, computed } from 'mobx'
import {
  getServerData, checkLoginData, fillUsersArray, isExist,
} from './transport'

localStorage.isAuthorized = false

class Store {
  @observable isAuthorized = false

  @observable isLoading = false

  @observable login = null

  @observable password = null

  @observable name = null

  @observable email = null

  @computed get newUser() {
    const {
      login, password, name, email,
    } = this
    return {
      login, password, name, email,
    }
  }


  currentUser = {}

  constructor() {
    this.init()
  }

  @action setLogin = (login) => {
    this.login = login
    this.debouncedIsUserExist(login)
  }


  @action setPassword = (password) => {
    this.password = password
  }

  @action setName = (name) => {
    this.name = name
  }

  @action setEmail = (email) => {
    this.email = email
  }

  setCurrentUser(obj) {
    this.currentUser = obj
  }

  @action setIsLoadingState(value) {
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

    addNewUser() {
      axios.post('/api/users', this.newUser)
    }

    refreshLocalStorage() {
      getServerData().then((users) => {
        if (!localStorage.users) localStorage.users = JSON.stringify({})
        localStorage.users = JSON.stringify(users)
      })
    }


    deBouncing(fn, time) {
      let isDebounced = false
      let timer

      return function (...rest) {
        if (isDebounced) clearTimeout(timer)
        isDebounced = true
        timer = setTimeout(() => {
          isDebounced = false
          fn(...rest)
        }, time)
      }
    }

    isUserExist(login) {
      console.log('login: ', login)
      isExist({ login }).then((resp) => console.log('resp', resp))
    }

    debouncedIsUserExist = this.deBouncing(this.isUserExist, 1000)

    checkLogin() {
      const { login, password } = this.newUser
      const data = { login, password }
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
