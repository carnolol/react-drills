import React, { Component } from "react";

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleUsername(e){
        this.setState({username: e.target.value})
    }
    handlePassword(e){
        this.setState({password: e.target.value})
    }
    handleLogin(){
        alert (`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render (){
        return(
            <div>
                <input onChange={e => this.handleUsername(e)} placeholder='username'/>
                <input onChange={e => this.handlePassword(e)} placeholder='password'/>
                <button onClick={()=> this.handleLogin()}>Login</button>
            </div>
        )
    }
}

export default Login