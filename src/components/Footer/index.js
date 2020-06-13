import React, { Component } from 'react'
import { BaseLink, withRoute } from 'react-router5'
import { observer } from 'mobx-react'
import ST from './index.scss'
import Button from '../Button'
import { calcClass } from '@help'
import store from '../../core/stores/backgroundStore'

const links = ['mainpage', 'news', 'profile']

@observer
class Footer extends Component {
    x = 1

    render() {
      const { router } = this.props
      const activeName = this.props.route.name

      const elements = links.map((el) => {
        const isReload = links.indexOf(el) === 0
        const isActive = el === activeName
        const buttonName = calcClass({
          footerButton: store.isTumblerOn,
          'footerButton-light': !store.isTumblerOn,
          active: isActive,
        }, ST)

        return (
          <BaseLink
            router={router}
            routeName={el}
            routeOptions={{ reload: isReload }}
            key={el}
          >
            <Button
              key={el}
              className={buttonName}
              isActive={isActive}
            >
              {el}
            </Button>
          </BaseLink>
        )
      })
      return (
        <footer>
          {elements}
        </footer>
      )
    }
}

export default withRoute(Footer)
