import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({children}){
    const [listProduct , setListProduct] = useState([]);
   const [selectCartItem,setSelectCartItem]=useState([]);
   const [selectWishListItem, setSelectWishListItem]= useState([]); 
   useEffect(()=>{
        const fetchProducts = async() => {
            try{
             const resp = await fetch("/api/products")
             setListProduct(await resp.json())
                         
            }
            catch(e){
               console.error(e);
            }
        };
        fetchProducts()
    },[])
 
    
 // Updating Cart List    
    const cartHandler = (_id) =>{

        const updatedCart = listProduct.products?.map((cartList)=> cartList._id === _id ?{...cartList, cart: !cartList.cart}: cartList)
   
        const selectCartItem = updatedCart.filter((cartList)=> cartList.cart);
        setListProduct({ products: updatedCart });
        setSelectCartItem(selectCartItem);
    } 
// Item added to WishList Handler
    const wishlistHandler = (_id) =>{
        const updateWishList = listProduct.products?.map((wishItemList)=> wishItemList._id === _id?{...wishItemList, wishList: !wishItemList.wishList}: wishItemList);
       
               
        const selectWishListItem = updateWishList.filter((lst)=> lst.wishList)
        
        setListProduct({products: updateWishList})
        setSelectWishListItem(selectWishListItem)
    }


return(
        <ProductContext.Provider value={{selectCartItem,listProduct,wishlistHandler,selectWishListItem,cartHandler}}>
            {children}
        </ProductContext.Provider>
    )
}


export default function useProductContext(){
    return useContext(ProductContext)
}