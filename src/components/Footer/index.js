import React, {Component} from 'react'
import ST from './index.scss'
import Button from '../Button'
import { BaseLink, withRoute } from 'react-router5'
import {calcClass} from '@help'

const links = ['mainpage','news','profile']


class Footer extends Component {
    render(){
        const {router} = this.props
        const activeName = this.props.route.name
        
        const elements = links.map(el => {
            const isReload = links.indexOf(el)===0
            const isActive = el === activeName
            const buttonName = calcClass({
                footerButton: true,
                active:isActive
            },ST)

            return(
                < BaseLink
                    router={router}
                    routeName={el}
                    routeOptions={{reload:isReload}}
                    key={el}
                >
                    <Button 
                    key = {el} 
                    className={buttonName}
                    isActive={isActive}
                    >
                        {el}
                    </Button>
                </BaseLink>
                )
            }
        )
        return(
            <footer>
                {elements}
            </footer>
        )
    }
}

export default withRoute(Footer)