import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Swiggy_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import resList from "../components/mocks/res-list.json";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [buttonChecker, setButtonChecker] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const fetchData = async () => {
    // const data = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.250967&lng=75.699785"
    // );
    // const json = await data.json();

    setListOfRestaurants(
      resList.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        resList.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
    );

    setFilteredRestaurant(
      resList.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        resList.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
    );

    //Optional Chaining
    // setListOfRestaurants(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants ||
    //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants ||
    //     json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants ||
    //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants
    // );
    // setFilteredRestaurant(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants ||
    //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants ||
    //     json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants ||
    //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants ||
    //     json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants
    // );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="m-0 p-0">
      <div className="flex justify-center search-ba m-5 h-10">
        <input
          className="border border-solid border-black p-2.5 rounded-md w-2/5 truncate"
          data-testid="searchInput"
          type="text"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="p-2 bg-gray-400 rounded-lg cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          🔍 Search
        </button>
      </div>
      <h2 className="text-center text-lg md:text-xl font-semibold ">
        Restaurants with online food delivery in Delhi
      </h2>
      <div className="flex justify-center mt-3">
        {buttonChecker ? (
          <button
            className="p-2 rounded-lg cursor-pointer bg-orange-400"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurants);
              setButtonChecker(!buttonChecker);
            }}
          >
            All Restaurants
          </button>
        ) : (
          <button
            className="p-2 rounded-lg cursor-pointer bg-orange-400"
            onClick={() => {
              const topRatedRestaurant = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestaurant(topRatedRestaurant);
              setButtonChecker(!buttonChecker);
            }}
          >
            Top Rated Restaurants
          </button>
        )}
      </div>
      <div className="flex flex-wrap justify-center mt-1 mx-2">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
