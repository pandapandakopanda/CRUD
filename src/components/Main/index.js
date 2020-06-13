import React, { createElement } from 'react'
import { routeNode, withRoute } from 'react-router5'
import { observer } from 'mobx-react'
import MainPage from '../MainPage'
import News from '../News'
import Profile from '../Profile'
import Login from '../Login'
import store from '../../core/stores/backgroundStore'
import ST from './index.scss'


const Main = (props) => {
  const { route } = props
  const segment = route.name.split('.')[0]

  const components = {
    mainpage: MainPage,
    news: News,
    login: Login,
    profile: Profile,

  }

  const SelectedElement = components[segment] || MainPage
  const className = store.isTumblerOn ? ST.wrapper : ST['wrapper-dark']

  return (
    <div className={className}>
      <SelectedElement />
    </div>
  )
}

export default routeNode('')(observer(Main))
