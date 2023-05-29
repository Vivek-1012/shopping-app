import React, { useState } from 'react'
import useProductContext from '../Context/ProductPage'
import {Link} from "react-router-dom"
const StorePage = () => {
  const {listProduct,wishlistHandler,cartHandler} = useProductContext();

  // const [input, setInput]= useState("");
  const [selectPriceRange,setSelectPriceRange] = useState(100);
  const [selectCategories,setSelectCategories]=useState("");
  const [selectRating, setSelectRating] = useState("");
  const [selectSortBy,setSelectSortBy]=useState("")

 
//event handlers
const handlerPriceRangeChange = (event)=> setSelectPriceRange(event.target.value)
 
const handlerSortByChange = (event) => setSelectSortBy(event.target.value);
   
const handlerRateByChange = (event) =>setSelectRating(event.target.value)

const handlerCategoriesChange = (event)=> setSelectCategories(event.target.value)
// const {products} = listProduct ;

let setStore = listProduct.products;
//sort by Price range
// if(selectPriceRange){
//   setStore = setStore.filter(lst=> lst.price >= selectPriceRange)
// }

// sort by Categories

if(selectCategories){
  setStore = setStore.filter(lst=> lst.categoryName === selectCategories)
}

// sort by Rating
 if(selectRating){
  setStore = setStore.filter(lst=> lst.rating >= JSON.parse(selectRating) )
 }

// sort by Price

if(selectSortBy){
  if(selectSortBy==="All"){
    setStore = selectSortBy === "All"? setStore : "";
  }if(selectSortBy === "Low"){
    setStore.sort((a,b)=> b.price - a.price)
  }if(selectSortBy === "High"){
    setStore.sort((a,b)=> a.price - b.price)
  }
}





return (
<>
    <div className='storeDisplay'>
      <div className='filterDisplay'>
        <h4>Filter</h4>
    <div>Price</div>
    <div>
      <input className='PriceRange' type="range" min="100" max
      ="1000" value={selectPriceRange} onChange={handlerPriceRangeChange} />
    </div>
    <div>Category</div><div>
      <ol><label>
      <li><input type="checkbox" value={"fiction"} checked={selectCategories === "fiction"} onChange={handlerCategoriesChange} />Fiction</li></label><label>
      <li><input type="checkbox" value={"non-fiction"} checked={selectCategories === "non-fiction"} onChange={handlerCategoriesChange} />Non Fiction</li></label><label>
      <li><input type="checkbox" value={"self-help"} checked={selectCategories === "self-help"} onChange={handlerCategoriesChange}/>Self Help</li></label>
      </ol>
    </div>
    <div>Rating</div>
    <div>
      <ol>
      <lable><li><input type="radio" value="1" checked={selectRating==="1"} onChange={handlerRateByChange} /> 1 Stars & above</li></lable>
      <lable><li><input type="radio" value="2" checked={selectRating==="2"} onChange={handlerRateByChange} /> 2 Stars & above</li></lable>
      <lable><li><input type="radio" value="3" checked={selectRating==="3"} onChange={handlerRateByChange} /> 3 Stars & above</li></lable>
      <lable><li><input type="radio" value="4" checked={selectRating==="4"} onChange={handlerRateByChange} /> 4 Stars & above</li></lable>
      </ol>
    </div>
    <div>Sort by</div>
    <div>
      <ol>
      <lable>
    <li><input type="radio" value="Low" checked={selectSortBy==="Low"} onChange={handlerSortByChange} />Price- High to Low</li>
    </lable>
    
    <lable>   
    <li>
      <input type="radio" value="High" checked={selectSortBy==="High"} onChange={handlerSortByChange} />Price- Low to High</li></lable>
      
    </ol> 
    </div>
      </div>
      <div className='booksDisplay'>
    <h2>Showing All Products</h2>
    {setStore?.length} items
    <div >
    <ol className='itemDisplay'>{setStore?.map(({id,title,_id,actualPrice,author,image,price,discount,categoryName,rating,cart,wishList})=>
    <li className='itemDisplayCard' key={id}>
      
      <div><img src={image} alt={title} width={150} height={200} /></div>
      <div className='titleAndRating'>
      <p className='displayCardTitle' ><Link style={{textDecoration:"none"}}  to={`/ProductDetails/${_id}`}>{title}</Link></p>
      <p className='displayCardRating'> {rating}★</p>
      </div>
      <p className='displayCardAuthor' >{author}</p>
      <div className='accountDetails' >      
      <p className='displayCardPrice'> ₹{price} </p>
      <p className='displayCardActualPrice'> ₹{actualPrice} </p>
      <p className='displayCardDiscount'> {discount} </p>
      </div>
      
      

      <div>{cart?<button className='cartButton'><Link to="/Cart" style={{cursor:"pointer", textDecoration:"none",fontWeight:"bold"}} >Go to Cart</Link></button>:<button className='cartButton'> <span onClick={()=>cartHandler(_id)} style={{cursor:"pointer"}} > Add to cart </span></button>}</div>
      <button onClick={()=>wishlistHandler(_id)}>{wishList?"Remove from wishlist":"Add to WishList"}</button>          
    </li>)}</ol></div>
    </div>
    </div>
    </>
  )
}

export default StorePage