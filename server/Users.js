/* eslint-disable no-param-reassign */
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
    if (users.length) return
    this.users.push(users)
  }

  checkData(data) {
    const currentUser = this.users.find((el) => el.login === data.login)
    if (currentUser === undefined) return null
    return (currentUser.password === data.password) ? currentUser : null
  }

  getData(id) {
    const currentUser = this.users.filter((el) => el.id === id)
    return currentUser[0]
  }
}

module.exports = new Users()
