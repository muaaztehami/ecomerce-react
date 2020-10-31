import './App.css';
import Products from './components/Products';
import Filter from './components/Filter';
import { Component } from 'react';
import Basket from './components/Basket';
import {Provider} from 'react-redux';
import store from './redux/store';

class App extends Component {

  render(){
    return (
      <Provider store={store}>
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
    );
      
  }
}

export default App;
