import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import MenuShimmer from "./MenuShimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const handleShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (resInfo === null) {
    return <MenuShimmer />;
  }
  const { name, cuisines, costForTwoMessage, city, avgRating } =
    resInfo?.cards[0]?.card?.card?.info ||
    resInfo?.cards[1]?.card?.card?.info ||
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  

  

  return (
    <div className="text-center">
      <h1 className="font-bold  my-4 md:my-6 text-xl md:text-2xl">{name}</h1>
      <p className="font-bold text-base md:text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
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
