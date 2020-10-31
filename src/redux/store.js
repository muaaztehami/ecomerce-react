import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Product';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

if(localStorage.getItem('cartItems')){
  initialState.cart = {items: JSON.parse(localStorage.getItem('cartItems'))}
}
export default createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));