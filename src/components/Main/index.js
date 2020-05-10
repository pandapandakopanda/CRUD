import React, {createElement} from 'react'
import {routeNode, withRoute} from 'react-router5'
import './index.scss'
import MainPage from '../MainPage'


const components={
    'mainpage': MainPage
}

const Main=(props)=>{
    console.log('props: ', props);
    const {route} = props
    const segment = route.name.split('.')[0]
    return createElement(components[segment])
}

export default withRoute('')(Main)