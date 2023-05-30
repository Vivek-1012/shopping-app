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
    
    {selectCartItem.length === 0 ?<div style={{fontSize:30,textAlign:"center"}} >Your Cart is empty!! 😕</div> :
    <div className='cartPageLayout' style={{display:"flex",textAlign:"center",justifyContent:"center"}}>
    <div className='cartPageLayoutCardLayout'>
    <ol className='cartBillitemDisplay'>{selectCartItem?.map(({id,title,_id,author,image,price,discount,actualPrice,rating,cart,wishList})=>
    <li className='CartitemDisplayCard' key={id}>
      <div style={{display:"flex"}}>
      <div className='imageCartDisplay'><img src={image} alt={title} width={150} height={200} /></div>
      <div>
      <div>
      <p className='displayCardTitle'><Link  to={`/ProductDetails/${_id}`} style={{margin:"0",padding:"0.5rem",fontSize:"18px",fontWeight:"bold",color:"gold"}} > {title}</Link></p>
      <p className='displayCardRating'> {rating}★</p>
      </div>
      
      <div className='accountDetails' >      
      <p className='displayCardPrice'> ₹{price} </p>
      <p className='displayCardActualPrice'style= {{color:'grey'}}> ₹{actualPrice} </p>
      <p className='displayCardCrossPrice'> | </p>
      <p className='displayCardDiscount' style= {{color:'lightblue'}} > ({discount} OFF) </p>
      </div>
      </div> 
      </div> 
      
      
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
      <p className='PriceDetails'>Price Details</p>
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
    </div>}
    </>
  )
}

export default CartPage