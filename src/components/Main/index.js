import React, {createElement} from 'react'
import {routeNode, withRoute} from 'react-router5'
import MainPage from '../MainPage'
import News from '../News'
import Profile from '../Profile'
import Login from '../Login'

import ST from './index.scss'

const components={
    'mainpage': MainPage,
    'news': News,
    'login': Login,
    'profile': Profile
}

const Main=(props)=>{
    const {route} = props
    const segment = route.name.split('.')[0]


    
    const SelectedElement = components[segment] || MainPage

    return (
        <div className={ST.wrapper}>
            <SelectedElement />
        </div>    
    )
}

export default routeNode('')(Main)