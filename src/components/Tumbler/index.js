/* eslint-disable react/state-in-constructor */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ST from './index.scss'
import store from '../../core/stores/backgroundStore'


@observer
class Tumbler extends Component {
  render() {
    const circleClassName = store.isTumblerOn ? ST.circle : ST['circle-left']


    return (
      <div
        className={ST.verticalLine}
        onClick={this.props.onclick}
      >
        <div
          className={circleClassName}
        />
      </div>
    )
  }
}


export default Tumbler
