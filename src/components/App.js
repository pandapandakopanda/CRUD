import React, {Component} from 'react'
import './index.scss'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
    render() {          
        return(
          <div className='wrapper'>
              <Nav />
              <Main />
              <Footer />
          </div>
        )
    }
}

export default App