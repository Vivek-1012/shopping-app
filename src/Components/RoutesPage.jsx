import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import WishListPage from '../pages/WishListPAge'
import ProfilePage from '../pages/ProfilePage'
import StorePage from '../pages/StoreCart'
import MockmanPage from '../pages/Mockman.jsx'
import SingleProductPage from '../pages/SingleProductPage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'

const RoutesPage = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/WishList" element={<WishListPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Store" element={<StorePage />} />
        <Route path="/Mockman" element={<MockmanPage />} />
        <Route path="/SignIn" element={<LoginPage />} />
        <Route path="/Signup" element={< SignUpPage/>} />
        
        <Route path="/ProductDetails/:ProductID" element={<SingleProductPage />} />
    </Routes>
  )
}

export default RoutesPage