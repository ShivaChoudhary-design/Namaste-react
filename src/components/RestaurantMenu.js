import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import MenuShimmer from "./MenuShimmer";
import {
  RestaurantCuisineCost,
  RestauratNames,
} from "./mocks/restuarant-menu-mock";
import resInfo from "./mocks/res-menu.json";
const RestaurantMenu = () => {
  const { resId } = useParams();
  // const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const handleShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (resInfo === null) {
    return <MenuShimmer />;
  }
  // added ?.data
  const { name, cuisines, costForTwoMessage, city, avgRating } =
    resInfo?.data?.cards[0]?.card?.card?.info ||
    resInfo?.data?.cards[1]?.card?.card?.info ||
    resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.data?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold  my-4 md:my-6 text-xl md:text-2xl">
        {/* {name} */}
        {RestauratNames[resId]}
      </h1>
      <p className="font-bold text-base md:text-lg">
        {/* {cuisines.join(", ")} - {costForTwoMessage} */}
        {RestaurantCuisineCost[resId]}
      </p>
      {/* Categories accordians */}
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => handleShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
