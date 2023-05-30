import React from 'react'
import { NavLink } from 'react-router-dom'
import useProductContext from '../Context/ProductPage'

const NavBar = () => {
const {selectCartItem,selectWishListItem} = useProductContext();
  return (
    <div className='navitem'>
      <div className='Home'>
      <NavLink className='navHeading' to="/"> Pustakभंडार </NavLink>
      </div >
      <input className='inputBar' type="text"/>
      <div id='navItem'>
      <NavLink className='navHeading' to="/Store"> Store </NavLink>
      <NavLink className='navHeading' to="/WishList"> WishList ({selectWishListItem.length}) </NavLink>
      <NavLink className='navHeading' to="/Cart"> Cart ({selectCartItem.length}) </NavLink>
      <NavLink className='navHeading' to="/Profile"> Profile </NavLink>
      <NavLink className='navHeading' to="/Mockman"> Mockman </NavLink>
      
      </div>
    </div>
  )
}

export default NavBar
