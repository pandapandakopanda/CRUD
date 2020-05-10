import React , {Component} from 'react'
import './index.scss'
import {calcClass} from '../help'



class Button extends Component {

     

    render(){
        const {
            className: extClassName
        } = this.props

        const className = calcClass({
            'button':true,
            [extClassName]: !!extClassName
        })
        return(
            <div 
                className={className}
            >
                {this.props.children}
            </div>            
        )
    }
}

export default Button