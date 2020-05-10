import React, {Component} from 'react'
import ST from './index.scss'
import Button from '../Button'


class Profile extends Component {

    state ={
        className:(localStorage.isAuthorized)? ST.signout:ST.hidden
    }

    render(){   

        const setData =()=>{
            localStorage.isAuthorized = false
            this.setState({className:ST.hidden})
        }
       
        return(
            <div className={ST.profile}>
                Profile authorized {localStorage.isAuthorized}
                <Button 
                    className={this.state.className}
                    onClick={setData}
                >
                    Sign Out
                </Button>
            </div>
        )
    }
}

export default Profile