import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LOGO_URL from "../images/food-png-19673.png";
// import cart from "../utils/cart.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

  const data = useContext(UserContext);
  // Subsrcribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col justify-between items-center w-11/12 md:flex-row">
      <div className="logo">
        <Link to="/">
          <img className="w-14 md:w-20 " src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex py-4 md:p-4">
          <li className="px-2 md:px-4 hover:border border-gray-500 rounded-md font-bold text-gray-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 md:px-4 hover:border border-gray-500 rounded-md font-bold text-gray-700">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 md:px-4 hover:border border-gray-500 rounded-md font-bold text-gray-700">
            <Link to="/contact">Contact</Link>
          </li>
          <Link to="/cart">
            <li className="px-2 md:px-3 flex hover:border border-gray-500 rounded-md">
              🛒{" "}
              <span className="ml-1 font-bold text-gray-700">
                {cartItems.length}
              </span>
            </li>
          </Link>

          <Link to="/login">
            <div className="px-2 md:px-4 hover:border border-gray-500 rounded-md font-bold text-gray-700">
              Login
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
