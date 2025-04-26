import React from 'react'
import Home from '../Home/Home'
import RestaurantDetails from '../Restaurant/RestaurantDetails'
import Cart from '../Cart/Cart'
import Profile from '../Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import Auth from '../Auth/Auth'
import Search from '../Search/Search'
import PaymentSuccess from '../PaymentSuccess/paymentsuccess'
import Offers from '../Offers/Offers'
import Help from '../Help/Help'
import Contact from '../Contact/Contact'
import About from '../About/About'



const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/resturant/city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            <Route path='/payment/success/:id*' element={<PaymentSuccess/>}/>
            <Route path="/help" element={<Help />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/offers' element={<Offers/>}/>
            
            
            
      </Routes>
      <Auth/>
    </div>
  )
}

export default CustomerRoute;