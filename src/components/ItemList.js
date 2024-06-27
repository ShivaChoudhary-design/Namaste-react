import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const ItemList = ({ items, isCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const totalItems = useSelector((store) => store.cart.items);
  // const CDN_URL =
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";

  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    let price = 0;
    totalItems.map((item) => {
      price +=
        item?.card?.info?.price / 100 || item?.card?.info.defaultPrice / 100;
    });
    setTotalPrice(price);
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [totalItems]);

  return (
    <>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12 ">
              <div className="py-2">
                <span className="text-sm md:text-base font-medium">
                  {item?.card?.info?.name}
                </span>
                <div
                  className={`font-normal text-xs md:text-sm ${
                    isCart && "mt-2"
                  }`}
                >
                  ₹{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info.defaultPrice / 100}
                </div>
              </div>
              {!isCart ? (
                <p className="text-xs md:text-sm truncate ">
                  {item?.card?.info?.description}
                </p>
              ) : null}
            </div>
            <div className="w-3/12 p-4 relative">
              {isCart ? (
                <div
                  onClick={() => handleRemoveItem(item?.card?.info?.id)}
                  className="absolute text-red-500 right-0 top-4 font-extrabold cursor-pointer"
                >
                  X
                </div>
              ) : (
                <div className="absolute">
                  <button
                    onClick={() => handleAddItem(item)}
                    className="p-2  bg-white text-green-600 shadow-lg rounded-md "
                  >
                    Add
                  </button>
                </div>
              )}
              <img
                className="rounded-md "
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
                  item?.card?.info?.imageId
                }
                height={isCart ? 50 : 60}
                width={isCart ? 50 : 100}
              />
            </div>
          </div>
        ))}
      </div>
      {isCart && items.length ? (
        <div className="text-left">
          <div className="mb-1 font-semibold"> Bill details</div>
          <div className="flex justify-between text-gray-600 text-sm">
            <div>Item Total</div>
            <div>₹{totalPrice}</div>
          </div>
          <div className="border-b border-black pb-4  flex justify-between text-gray-600 text-sm">
            <div>
              Delivery Fee <span className="hidden md:inline">| 7.6 kms</span>
            </div>
            <div> ₹82</div>
          </div>
          <div className="mt-2 flex justify-between text-gray-600 text-sm">
            <div>Platform fee</div>
            <div>₹5</div>
          </div>
          <div className="border-b-2 border-black pb-2 flex justify-between text-gray-600 text-sm">
            <div>GST and Restaurant Charges</div>
            <div> ₹48.85</div>
          </div>

          <div className="flex justify-between font-semibold">
            <div>TO PAY</div>
            <div> {totalPrice + 82 + 5 + 48.85}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ItemList;
