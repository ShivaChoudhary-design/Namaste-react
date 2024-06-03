import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.250967&lng=75.699785&&submitAction=ENTER&restaurantId=" +
        resId
    );
    const json = await data.json();
    
    setResInfo(json.data);
    }catch(error){
      console.log(error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
