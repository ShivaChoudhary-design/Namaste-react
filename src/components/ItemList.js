import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, isCart }) => {
  const CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 ">
            <div className="py-2">
              <span className="text-sm md:text-base font-medium">
                {item?.card?.info?.name}
              </span>
              <div className="font-normal text-xs md:text-sm">
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info.defaultPrice / 100}
              </div>
            </div>
            <p className="text-xs md:text-sm truncate ">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-4 ">
            {isCart ? null : (
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
              src={CDN_URL + item?.card?.info?.imageId}
              height={isCart ? 50 : 60}
              width={isCart ? 50 : 100}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
