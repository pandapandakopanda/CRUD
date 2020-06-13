import { action, observable, computed } from 'mobx'

class Store {
  @observable counter = 0

  @action increase=() => {
    this.counter = this.counter + 1
  }
}

const store = new Store()
export default store
export { Store }
