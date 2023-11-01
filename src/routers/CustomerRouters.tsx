import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../customer/pages/Homepage/Home";
import Restaurant from "../customer/pages/Restaurant/Restaurant";
import Navbar from "../customer/components/Navbar/Navbar";
import Cart from "../customer/pages/Cart/Cart";
import Profile from "../customer/pages/Profile/Profile";
import "./transition.css"

import { useEffect, useState } from 'react';

const CustomerRouters = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div className={`${transitionStage}`} onAnimationEnd={() => {
      if (transitionStage === "fadeOut") {
        setTransistionStage("fadeIn");
        setDisplayLocation(location);
      }
    }}>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:city/:name/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myprofile/*" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default CustomerRouters;
