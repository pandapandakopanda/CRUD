import React, {createElement} from 'react'
import {routeNode, withRoute} from 'react-router5'
import MainPage from '../MainPage'
import News from '../News'
import Profile from '../Profile'
import Login from '../Login'
import Registration from '../Registration'

import ST from './index.scss'



const Main=(props)=>{
    const {route} = props
    const segment = route.name.split('.')[0]

    const components={
        'mainpage': MainPage,
        'news': News,
        'login': Login,
        'profile': Profile,
        'registration': Registration,
    }
    
    let SelectedElement = components[segment] || MainPage

    return (
        <div className={ST.wrapper}>
            <SelectedElement />
        </div>    
    )
}

export default routeNode('')(Main)