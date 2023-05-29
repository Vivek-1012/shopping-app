import React from 'react'
import useProductContext from '../Context/ProductPage'
import { Link } from 'react-router-dom'

const CartPage = () => {
const {selectCartItem,cartHandler,wishlistHandler} = useProductContext()
const totalAmount = selectCartItem.reduce((acc,curr)=>acc+curr.price,0)
  return (
    <>
    <Link to="/Store">Back to store</Link>
    <h2>Cart Page</h2>
    <div className='cartPageLayout'>
    <div className='cartPageLayoutCardLayout'>
    <ol className='itemDisplay'>{selectCartItem?.map(({id,title,_id,author,image,price,categoryName,rating,cart,wishList})=>
    <li className='itemDisplayCard' key={id}>
      
      <div><img src={image} alt={title} width={150} height={200} /></div>
      <div className='titleAndRating'>
      <p className='displayCardTitle' ><Link  to={`/ProductDetails/${_id}`}>{title}</Link></p>
      <p className='displayCardRating'> {rating}★</p>
      </div>
      <p className='displayCardAuthor' >Author : {author}</p>
      <p className='displayCardPrice'>Price : ₹{price}</p>
      <p className='displayCardCategory' >Category : {categoryName}</p>
      
       <button onClick={()=>cartHandler(_id)} > Remove from cart</button>
  
       <div>{wishList?<Link to="/WishList" style={{border:"1px solid"}}>Alreday added to WishList</Link>:<button onClick={()=>wishlistHandler(_id)}>Add to wishList</button> }</div>
      
      </li>)}
      
    </ol>
    </div>
    <div className='cartPageLayoutBillLayout'>
      <div className='billLayout' >
        <div className='billLayoutCoupon'>
      <p>Have A Coupon ?</p>
         <button>Apply</button>
         </div>         
      <p>Price Details</p>
      <div className='billLayoutPrice'>
      <p>Price({selectCartItem.length}items)</p>   <p>₹{totalAmount}</p>
      </div>
      <div className='billLayoutDelivery'>
      <p>Delivery Charges</p><p> FREE</p>
      </div>
      <div className='billLayoutCoupon'>
      <p>Coupon Discount </p><p> ₹0.00</p>
      </div>
      <div className='billLayouttotalBill'>
      <p>total Bill:</p><p> ₹{totalAmount}</p>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default CartPage