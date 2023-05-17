import React, { useContext } from 'react'
import { Link,Outlet } from 'react-router-dom'
import './navigation.scss'
import crownLogo  from '../../assets/crown.svg'
import { UserContext } from '../../contexts/contexts'
import { signOutUser } from '../../utils/firebase/firebas'
import Cart_icon from '../CartIcon/Cart_icon'
import Cart_dropdown from '../Cart-dropdown/Cart_dropdown'
import { CartContext } from '../../contexts/cart_context'

const Navigation = () => {
const {currentUser} =useContext(UserContext);
const { isCartOpen } = useContext(CartContext);




  return (
   
    <div className='navigation'>
<Link className='logo-container' to='/'>
<img src={crownLogo} alt=''/>
</Link>

<div className='nav-links-container'>
<Link className='nav-link' to='/shop'>
SHOP
</Link>
{
  currentUser ? (<span className='nav-link' onClick={signOutUser}>SIgnOut</span>
   ) :( <Link className='nav-link' to='/auth'>
SIGN IN
</Link>
)}

<Cart_icon/>
</div>
{isCartOpen && <Cart_dropdown/>}

<Outlet />
    </div>


  )
}

export default Navigation