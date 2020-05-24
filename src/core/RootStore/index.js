import authorizationStore from '../stores/authorizationStore'

class RootStore{
  authorizationStore = authorizationStore
}

export default new RootStore()