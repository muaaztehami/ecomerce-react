import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

   
    
    this.state = {
      email: '',
      password: '',
     // loggedIn
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault()
/////
    const { email, password } = this.state
    //(endpoint)(obj of data)(flag to tell api to set cookie)
    axios.post("http://localhost:3001/api/v1/users/sign_in", 
    {
      
        email: email,
        password: password
      
    },
    //{withCredentials: true}
    )
    .then(response => {
      //console.log("res from login", response);
      if (response.status === 200){//calling handler in parent(home) after success

        this.props.handleLogin(response.data);
      }
    })
    .catch(error => {
      console.log("login error", error);
    });
////

    //const { email, password } = this.state
    // if(email === 'u@gmail.com' && password === '123456')
    // {
    //   const token = 'simple-token';
    //   localStorage.setItem('token', token);
    //   const data = {
    //     user:{
    //       email: email,
    //       password: password,
    //       token: token
    //     }
        
    //   }
    //   this.props.handleLogin(data);
     
    // }

  }
  render() {
    
    if(this.props.loggedInStatus)
    {
      return <Redirect to='/Home' />
    }
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.handleChange} 
            required
          />
          <br/>
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.handleChange} 
            required
          />
          <br/>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;