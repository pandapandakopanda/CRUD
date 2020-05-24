import React, { Component } from 'react'
import ST from './index.scss'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import { fillUsersArray } from '../core/stores/initialization'

console.log('ST: ', ST)

class App extends Component {
x = 1

componentDidMount() {
  fillUsersArray(localStorage.users)
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
