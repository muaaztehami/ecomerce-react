import './App.css';
import { Component } from 'react';
//import {Provider} from 'react-redux';
//import store from './redux/store';

import Home from './components/Home'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from './components/auth/Login';

class App extends Component {

  constructor(props) {
    super(props);
    // const token = localStorage.getItem('token');
    // let loggedInStatus = false; 

    // if( token === '' )
    // {
    //   // console.log('TOKEN')
    //   loggedInStatus = true;
    // }
    console.log('called')
    this.state = {
      loggedInStatus: false,
      user: {}
    }

    const token = localStorage.getItem('token');
    console.log(this.state.loggedInStatus)
    console.log(this.state.user.authentication_token)
    if( token === this.state.user.authentication_token ){
      console.log('check')
      this.setState({
        loggedInStatus: true
      });
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.changeLogStatus = this.changeLogStatus.bind(this);
  }

  // componentDidMount(){
  //   const token = localStorage.getItem('token');
  //   console.log(this.state.loggedInStatus)
  //   if( token === this.state.user.authentication_token )
  //   this.setState({
  //     loggedInStatus: true
  //   });
  // }
  changeLogStatus(){
    this.setState({
      loggedInStatus: false
      //user: null
    });
  }

  handleLogin(data){
    this.setState({
      loggedInStatus: true,
      user: data
      
    });
    console.log('USER')
    console.log(this.state.user.authentication_token)
  }
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route 
          exact path="/Home" 
          render ={props => (
            <Home {...props} loggedInStatus={this.state.loggedInStatus} changeLogStatus={this.changeLogStatus}/>
          )}
          />

          <Route 
          exact path="/" 
          render={props => (
            <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>
          )}
          />

        </Switch>
      </BrowserRouter>
     
    );
      
  }
}

export default App;
