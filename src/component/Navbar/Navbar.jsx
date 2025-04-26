import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge, Box, IconButton } from '@mui/material';
import { pink } from '@mui/material/colors';
import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import CartHoverPopup from '../CartHoverPopup';

export const Navbar = () => {
  const { auth, cart } = useSelector((store) => store);
  const navigate = useNavigate();
  const [isUser, setUser] = useState(false);
  const location = useLocation();
  
  const getLinkClass = (path) => 
    location.pathname === path
      ? " text-pink-600 font-bold px-3 py-1 rounded-full bg-white"
      : "";

  const isHome = location.pathname === "/";

  const handleAvatarClick = () => {
    if (auth.user?.role === "ROLE_CUSTOMER") {
      navigate("/my-profile");
    } else {
      navigate("/admin/restaurants");
    }
  };

  useEffect(() => {
    if (isUser) {
      setUser(false);
      navigate("/my-profile");
    }
  }, [isUser]);

  return (
    <>
      <Box 
        className="px-2 sticky top-0 z-50 py-[.4rem] bg-[#f50057] lg:px-20 flex justify-between"
      >
        <div className="flex items-center justify-between p-1">
          <Link to="/">
            <img src="https://i.imgur.com/EaVTotc.jpeg" alt="Logo" className="w-10 h-10" />
          </Link>
        </div>

        <div className="flex items-center space-x-2 la:space-x-10">
          <div className="flex items-center gap-6 text-white text-lg">
            {location.pathname === "/" && (
              <>
                <Link to="/search" className={getLinkClass("/search")}>Search</Link>
                <Link to="/about" className={getLinkClass("/about")}>About Me</Link>
                <Link to="/offers" className={getLinkClass("/offers")}>🎉Offers</Link>
              </>
            )}
            {!isHome && (
              <>
                
              </>
            )}
          </div>

          {isHome && (
  <>
    <div>
      {auth.user ? (
        <Avatar 
          onClick={handleAvatarClick} 
          sx={{ bgcolor: "white", color: pink.A400 }}
        >
          {auth.user?.fullName[0].toUpperCase()}
        </Avatar>
      ) : (
        <IconButton onClick={() => navigate("/account/login")}>
          <Person />
        </IconButton>
      )}
    </div>

    <div>
      <IconButton onClick={() => navigate("/cart")}>
        <Badge color="primary" badgeContent={cart.cart?.items?.length}>
          <CartHoverPopup sx={{ fontSize: "1.5rem" }} />
        </Badge>
      </IconButton>
    </div>
  </>
)}
        </div>
      </Box>
    </>
  );
};
export default Navbar;