import React, { Component } from 'react'
import util from '../util';
import { connect } from "react-redux";
import { addToCart, removeFromCart } from '../redux/Product/cartActions'

class Basket extends Component {
  render() {
    const {cartItems} = this.props;
    return (
      <div className="alert alert-info">
        {cartItems.length===0? "Basket is empty": <div>You have {cartItems.length} products in the basket.</div>}

        {cartItems.length>0 &&
          <div>
            <ul>
              {cartItems.map(item =>
                <li>
                  <b>{item.title}</b>
                   (x{item.count}) = {util.formatCurrency(item.price * item.count)}
                  <button className="btn btn-danger" onClick={()=>this.props.removeFromCart(this.props.cartItems, item)}>
                    Remove
                  </button>
                </li>
              )}
            </ul>
            Total = {util.formatCurrency(cartItems.reduce((a,c) => a+c.price*c.count,0))}
          </div>
        }
        <button className="btn btn-primary" onClick={()=>alert("Checkout needs to implement")}>
          Checkout
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);
