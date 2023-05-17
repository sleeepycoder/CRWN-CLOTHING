import React,{useContext} from 'react'
import Button from '../Button/Button'
import './cart_d.scss'
import  CartItem from '../CartItem/CartItem'
import { CartContext } from '../../contexts/cart_context'
import { useNavigate } from 'react-router-dom';
const Cart_dropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
      navigate('/checkout');
    };
    // console.log(cartItems)
  return (
   
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button  onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>

  )
}

export default Cart_dropdown