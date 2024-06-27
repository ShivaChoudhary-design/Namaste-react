import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="md:w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="m-2 p-2 bg-black text-white rounded-md"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-xl font-semibold">
            Cart is empty. Add items to the cart!
          </h1>
        )}
        <ItemList items={cartItems} isCart={true} />
      </div>
    </div>
  );
};

export default Cart;
