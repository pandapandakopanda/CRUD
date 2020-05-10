import React, {Component} from 'react'
import './index.scss'
import Button from '../Button'
import { BaseLink, withRoute } from 'react-router5'


const buttons = ['Main','Login','News','Profile']


class Nav extends Component {
    render(){
        const {router} = this.props
        const isReload = true
        const elements = buttons.map(el =>  {
        return (
            <BaseLink
                router={router}
                routeName={el}
                routeOptions={{reload:isReload}}
            >
                <Button key={el} >
                    {el}
                </Button>
            </BaseLink>
            )
            }
        )
        return(
            <header>
                {elements}
            </header>
        )
    }
}

export default withRoute(Nav)