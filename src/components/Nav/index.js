import React, { Component } from 'react'
import { BaseLink, withRoute } from 'react-router5'
import { observer } from 'mobx-react'
import store from '../../core/stores/backgroundStore'
import ST from './index.scss'
import Button from '../Button'
import { calcClass } from '@help'

const buttons = ['mainpage', 'login', 'news', 'profile']

@observer
class Nav extends Component {
    x = 1

    render() {
      const { router } = this.props
      const activeName = this.props.route.name

      const elements = buttons.map((el, i, buttons) => {
        const isReload = buttons.indexOf(el) === 0
        const isActive = el === activeName

        const btnClassName = calcClass({
          navButton: store.isTumblerOn,
          'navButton-light': !store.isTumblerOn,
          active: isActive,
        }, ST)

        return (
          <BaseLink
            key={el}
            router={router}
            routeName={el}
            routeOptions={{ reload: isReload }}
          >
            <Button
              key={el}
              className={btnClassName}
              isActive={isActive}
            >
              {el}
            </Button>
          </BaseLink>
        )
      })
      return (
        <header>
          {elements}
        </header>
      )
    }
}

export default withRoute(Nav)
