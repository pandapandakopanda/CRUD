/* eslint-disable no-param-reassign */
const { castArray } = require('./help')


class Users {
  users = []

  add(data) {
    const id = this.users.length
    data.id = id
    this.users.push(data)
  }

  remove(id) {
    const deletedUser = this.users.filter((el) => el.id === id)
    this.users.splice(this.users.indexOf(deletedUser), 1)
  }

  fillUsers(users) {
    console.log('users: ', users)
    this.users = castArray(users)
    console.log('this.users : ', this.users)
  }

  checkData(data) {
    console.log('data: ', data)
    const currentUser = this.users.find((el) => el.login === data.login)
    console.log('this.users: ', this.users)
    console.log('currentUser: ', currentUser)
    if (currentUser === undefined) return null
    return (currentUser.password === data.password) ? currentUser : null
  }

  getData(id) {
    const currentUser = this.users.filter((el) => el.id === id)
    return currentUser[0]
  }
}

module.exports = new Users()
