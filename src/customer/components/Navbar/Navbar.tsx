import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const navigateToProfile = () => {
    navigate("/myprofile");
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <nav className="px-5 z-50 py-[.7rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div
          className="lg:mr-10 cursor-pointer flex items-center space-x-4"
          onClick={() => navigate("/")}
        >
          <li className="font-bold text-2xl list-none transition-transform transform hover:scale-110">
            foody
          </li>
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
        {true ? (
          <span
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            className="text-sm cursor-pointer pl-2"
            onClick={true? handleOpenMenu : navigateToProfile}
          >
            Vicky
          </span>
        ) : (
          <IconButton>
            <PersonIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        )}
        <Menu
        
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => navigate("/myprofile")}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        <IconButton onClick={()=>navigate("/cart")}>
          <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;