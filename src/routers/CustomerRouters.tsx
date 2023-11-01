import { Route, Routes } from "react-router-dom";
import Home from "../customer/pages/Homepage/Home";
import Restaurant from "../customer/pages/Restaurant/Restaurant";
import Navbar from "../customer/components/Navbar/Navbar";
import Cart from "../customer/pages/Cart/Cart";
import Profile from "../customer/pages/Profile/Profile";

const CustomerRouters = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:city/:name/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myprofile/*" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default CustomerRouters;
