import React, {Component} from 'react'
import St from './index.scss'
import Button from '../Button'

const data = {
    name:'admin',
    password:'12345'
}

localStorage.isAuthorized = false


class Login extends Component {
    
    state = {
        name:'',
        password:'',
        color: ''
    }
    
    getData=()=>{
        const {
            name,password
        }=this.state
        const originData={
            name:name,
            password:password
        }
        const compare =(JSON.stringify(data) === JSON.stringify(originData))
        localStorage.isAuthorized = compare
        this.setState({color:(compare) ? St.green : St.red})
        setTimeout(() => {
            this.setState({color:''})
        }, 1000);
    }

    getName = (ev) =>{
        const {value} = ev.target
        this.setState({name:value})
    }
    
    getPassword = (ev) =>{
        const {value} = ev.target
        this.setState({password:value})
    }
    
    
    render(){
        return(
            <div className={St.login}>
               <div className={this.state.color}>
                    Login:
                    <input 
                        type='text'
                        onChange={this.getName}    
                    />
                </div>   
                <div className={this.state.color}>
                    Password:
                    <input 
                        type='password' 
                        onChange={this.getPassword}
                    />
                </div>     
                <Button 
                    className={St.submit}
                    onClick={this.getData}
                >
                    Sign in
                </Button>    
            </div>
        )
    }
}

export default Login