import React from 'react'
import useProductContext from '../Context/ProductPage'
import { belongsTo } from 'miragejs'
import { Link } from 'react-router-dom'

const WishListPage = () => {
  const {selectWishListItem,wishlistHandler,cartHandler} = useProductContext()
 
  return (
    <>
    <Link to="/Store"> Back to store </Link>
    <h2>WishList</h2>
    <ol>{selectWishListItem?.map(({_id,title,author,cart,wishList})=>
    <li key={_id}><h2>Title: {title}</h2>
    <h3>Author: {author}</h3>
   <button onClick={()=>wishlistHandler(_id)}>Remove from WishList</button>
   <div>{cart?<p>Alreadyin cart</p>:<button onClick={()=>cartHandler(_id)}> Add to cart </button>}</div>   
    </li>)}</ol>
    </>
  )
}

export default WishListPage
