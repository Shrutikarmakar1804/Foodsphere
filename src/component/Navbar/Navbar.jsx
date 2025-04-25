import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, Box, IconButton } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartHoverPopup from '../CartHoverPopup';
import { FaPercent } from 'react-icons/fa';
import { MdHelpOutline } from 'react-icons/md';


export const Navbar = () => {
  const {auth,cart}=useSelector((store)=>store);
  const navigate=useNavigate();
  const [isUser,setUser]=useState(false)
  const handleAvatarClick=()=>{
    if(auth.user?.role==="ROLE_CUSTOMER")
    {
      navigate("/my-profile")
    }
    else{
      navigate("/admin/restaurant")
    }
  }
  useEffect(()=>{
    if(isUser)
    {
      setUser(false)
      navigate("/my-profile")
    }

      
  },[isUser])
  return (
    <>
     
  
    <Box 
    className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#f50057] lg:px-20 flex
    justify-between'>
  
    
       <div className='lg:mr-10 cursor-pointer flex items-center
        space-x-4'>
          <li onClick={()=>navigate("/")} className='logo font-semibold text-gray-300 text-2x'>
           <img className='w-[2.75rem] h-[2.75rem] object-cover' src="https://api.cloudinary.com/v1_1/pplx/image/download?timestamp=1745610702&public_id=user_uploads%2FrrYYeKHkQNFqugQ%2FGemini_Generated_Image_rqlc6urqlc6urqlc&format=jpg&signature=1957ac6bb91c1f8987d1228e2d9e633aa63aedf6&api_key=168798331147639" alt="" />

          </li>

       </div>
      

    
  <div className='flex items-center space-x-2 la:space-x-10'>
          <div className=''>
            <IconButton onClick={()=> navigate("/search")}>
              <SearchIcon sx={{fontSize:"1.5rem"}}/>

            </IconButton>
          </div>
          <nav className="flex items-center justify-end gap-8 p-4 bg-pink-A400 ">
      <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
        <FaPercent className="text-white text-xl" />
        <span className="text-white font-medium">Offers</span>
        <span className="text-xs text-black font-bold ml-1">NEW</span>
      </div>
      <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
        <MdHelpOutline className="text-white-500 text-xl" />
        <span className="text-white-500 font-medium">Help</span>
      </div>
    </nav>
          
          <div className=''>

          {auth.user ? (
          <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400}}>
            {auth.user?.fullName[0].toUpperCase()}
          </Avatar>
          ) :(
          <IconButton onClick={()=>
          navigate("/account/login")
          // setUser(!isUser)
          
           }>
            <Person/>
          </IconButton>)}
          </div>
          <div className=''> 
           
            <IconButton  onClick={()=>navigate("/cart")}>
            <Badge color="primary" badgeContent={cart.cart?.items?.length} >
              <CartHoverPopup sx={{fontSize:"1.5rem"}}/>
              </Badge>
                          
            </IconButton>        
   </div>          
           </div>
    </Box>
      </>
  );
};


