import React, { Component } from 'react'
import rootStore from '../core/RootStore'
import ST from './index.scss'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
  componentDidMount() {
    rootStore.authorizationStore.initializateDataBase()
  }

  render() {
    return (
      <div className={ST.wrapper}>
        <Nav />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
