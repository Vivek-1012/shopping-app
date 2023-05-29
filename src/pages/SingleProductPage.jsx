import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useProductContext from '../Context/ProductPage';

const SingleProductPage = () => {
  const {listProduct} = useProductContext();
  const {ProductID}= useParams();
  
  
  const ProductDetails = listProduct.products?.find(lst=> lst._id === (ProductID))
  
  return (
    <>
    <Link to="/Store">Back</Link>
    <h2>Product Details</h2>
    <h1>Title: {ProductDetails.title}</h1>
    <h2>Author: {ProductDetails.author} </h2>  
    
    </>
  )
}

export default SingleProductPage