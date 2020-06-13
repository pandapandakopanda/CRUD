/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import rootStore from '../core/RootStore'
import ST from './index.scss'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import Alert from './Alert'
import Tumbler from './Tumbler'
import store from '../core/stores/backgroundStore'


@observer
class App extends Component {
  componentDidMount() {
    rootStore.authorizationStore.initializateDataBase()
  }

  onClickHandler=() => {
    store.setTubmler()
  }

  render() {
    return (
      <div className={ST.wrapper}>

        <div className={ST.bg}>
          <div className={store.isTumblerOn ? ST.star : ST['star-hidden']} />
          <div className={!store.isTumblerOn ? ST.flower : ST['flower-hidden']} />
        </div>

        <div className={ST.fg}>
          <Nav />
          <Main />
          <Tumbler onclick={this.onClickHandler} />
          <Footer />
          <Alert />
        </div>
      </div>
    )
  }
}

export default App
