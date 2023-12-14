import { useState } from "react";
import ItemList from "./ItemList";
import dropdown from "../../public/down-arrow.png";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {/* Accordian Header */}
          <span className="text-lg font-semibold">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>
            <img src={dropdown} height={16} width={16} />
          </span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} isCart={false} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
