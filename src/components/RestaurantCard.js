import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
  const { deliveryTime } = resData?.sla;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[270px]  md:w-[250px] rounded-lg shadow-lg transition ease-in-out hover:scale-95"
    >
      <img
        className="rounded-lg w-60 h-[140px]"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h3 className="font-semibold py-2 text-lg">{name}</h3>
      <h4 className="cuisines font-light text-sm">{cuisines.join(", ")}</h4>
      <div className="flex justify-between font-serif m-1">
        <h4 className="w-12 bg-green-500 rounded text-center">{avgRating}⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}min</h4>
      </div>
    </div>
  );
};

//Higher Order Components
//input - RestaurantCard ==> RestaurantCard Promoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
