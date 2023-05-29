import React from 'react'
import useAppContext from '../Context/StorePage'
import { Link } from 'react-router-dom'


const HomePage = () => {
const {listCategories} = useAppContext()  
 
    return (
        <>
    <h1>Welcome to home page</h1>
    <h2>Categories</h2>
    <div className='categoriesItem'>
      <ol>{listCategories.categories?.map((item)=>{
      const {id,categoryName,description
      } = item
      return(
      <li  key={id}>
  <h4><Link to="/Store"  >{categoryName}</Link> </h4>
  <p>{description}</p>
</li>)})}</ol>
    </div>
     
  </>)
}

export default HomePage