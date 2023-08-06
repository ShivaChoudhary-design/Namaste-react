import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
// import cart from "../utils/cart.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const data = useContext(UserContext);
  // Subsrcribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col justify-between items-center shadow-lg bg-gray-300 md:flex-row">
      <div className="logo ml-12">
        <Link to="/">
          <img className="w-20 " src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 hover:border border-gray-500 rounded-md font-bold text-gray-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:border border-gray-500 rounded-md font-bold text-gray-700">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:border border-gray-500 rounded-md font-bold text-gray-700">
            <Link to="/contact">Contact</Link>
          </li>
          <Link to="/cart">
            <li className="px-3 flex hover:border border-gray-500 rounded-md">
              🛒{" "}
              <span className="ml-1 font-bold text-gray-700">
                {cartItems.length}
              </span>
            </li>
          </Link>
          <button
            className="login-btn px-4 hover:border border-gray-500 rounded-md font-bold text-gray-700"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logut") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
