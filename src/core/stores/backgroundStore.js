import { observable, action } from 'mobx'


class Store {
@observable isTumblerOn = false

@action setTubmler =() => {
  this.isTumblerOn = !this.isTumblerOn
}
}


const store = new Store()
export default store
export { Store }
