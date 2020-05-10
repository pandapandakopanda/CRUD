import React, {Component} from 'react'
import ST from './index.scss'
console.log('ST: ', ST);
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
    render() {        
        return(
          <div className={ST.wrapper}>
              <Nav />
              <Main />
              <Footer />
          </div>
        )
    }
}

export default App