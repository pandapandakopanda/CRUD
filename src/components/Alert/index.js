/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ST from './index.scss'
import store from '../../core/stores/alert'


@observer
class Alert extends Component {
  x=1

  alertDialog =() => (
    <div className={ST.alertDialog}>
      {'meow'}
    </div>
  )

  onClickHandler =(ev) => {
    console.log(ev.target)
  }


  render() {
    return (
      <div
        className={ST.alertWrapper}
        onClick={this.onClickHandler}
      >
        <p>{store.counter}</p>
      </div>
    )
  }
}


export default Alert
