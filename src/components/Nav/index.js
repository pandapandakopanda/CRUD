import React, {Component} from 'react'
import ST from './index.scss'
import Button from '../Button'
import { BaseLink, withRoute } from 'react-router5'
import { calcClass } from '@help'

const buttons = ['mainpage','login','news','profile']


class Nav extends Component {
    render(){
        const {router} = this.props
        const activeName = this.props.route.name
        
        const elements = buttons.map((el,i,buttons) =>  {
            const isReload = buttons.indexOf(el)===0
            const isActive = el === activeName

            const btnClassName = calcClass({
                navButton: true,
                active: isActive,
            }, ST)    

            return (
                <BaseLink
                    key = {el}
                    router={router}
                    routeName={el}
                    routeOptions={{reload:isReload}}
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