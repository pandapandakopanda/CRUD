import { action, observable } from 'mobx'


class Store {
    @observable isAuthorized = false 
    
      
    constructor() {
      this.init()
      console.log('init');
      console.log(this.isAuthorized);
    }


  
    @action init() {
      this.isAuthorized = this.getIsAuthorized()
    }
  
    getIsAuthorized() {
      console.log('get auto');
      return localStorage.isAuthorized
    }
}

const store = new Store()

export default store
export {Store}
