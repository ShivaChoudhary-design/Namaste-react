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
      "https://thingproxy.freeboard.io/fetch/https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat=31.250967&lng=75.699785%26%26submitAction%3DENTER%26restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    }catch(error){
      console.log(error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
