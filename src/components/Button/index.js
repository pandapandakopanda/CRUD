import React , {Component} from 'react'
import ST from './index.scss'
import {calcClass} from '../help'



class Button extends Component {

     
    render(){
        const {
            className: extClassName,
        } = this.props

        const className = calcClass({
            'button':true,
            'active': this.props.isActive
        }, ST, {
            [extClassName]: !!extClassName,
        })

        return(
            <div 
                className={className}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </div>            
        )
    }
}

export default Button