import React, {Component} from 'react'
import './index.scss'
import Button from '../Button'
import { BaseLink,withRoute } from 'react-router5'



class Footer extends Component {

    links = ['Main','News','Profail']

    render(){

        const {router} = this.props
        const isReload = true
        const elements = this.links.map(e => {
            return(
                < BaseLink
                    router={router}
                    routeName={e}
                    routeOptions={{reload:isReload}}
                >
                    <Button key = {e} className='footerButton' name={e} />
                </BaseLink>
                )
            }
        )
        console.log(elements);

        return(
            <footer>
                {elements}
            </footer>
        )
    }
}

export default withRoute(Footer)