import React, { Component } from 'react'
import Products from './Products';
import Filter from './Filter';
import { Link, Redirect } from 'react-router-dom';
import Basket from './Basket';
import {Provider} from 'react-redux';
import store from '../redux/store';

export default class Home extends Component {
  constructor(props) {
    super(props);
    // const token = localStorage.getItem('token');
    // let loggedIn = true;  //local var
    // if( token !== 'simple-token' )
    // {
    //   loggedIn = false;
    // }
    this.logOut = this.logOut.bind(this);
    // this.state = {
    //  // loggedIn
    // };
  }
  logOut(){
    
    this.props.changeLogStatus();
    localStorage.removeItem('token')
  }
  render() {
    //const token = localStorage.getItem('token');
    // console.log('token')
    // console.log(token)
    // console.log('HOME!!!')
    // console.log(this.props.loggedInStatus)
    if(this.props.loggedInStatus === false)
    {
      return <Redirect to='/' />
    }
    return (
      
      <Provider store={store}>
        <Link to='/' onClick={this.logOut}>Logout</Link>
        <div className="container">

          <h1>Ecommerce Shopping Cart</h1>
          <hr/>
          <div className="row">

            <div className="col-md-8">
              <Filter />
              <hr/>
              <Products />
            </div>

            <div className="col-md-4">
              <Basket />
            </div>

          </div>
          
        </div>
      </Provider>
    )
  }
}
