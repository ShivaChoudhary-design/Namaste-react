import FOOD_IMG from "../images/food-png-19665.jpg";
// import User from "./User";
// import UserClass from "./UserClass";
const About = () => {
  return (
    <>
      <div className="flex flex-col p-3 md:flex-row justify-around my-32">
        <div className="flex flex-col gap-2.5 mt-10">
          <h1 className="text-5xl font-serif pl-5">Welcome to</h1>
          <h1 className="text-5xl font-serif pl-5">The world of</h1>
          <h1 className="bg-purple-400 p-5  text-5xl rounded-lg font-serif">
            Your Favourite & Fresh Food
          </h1>
          <h3 className="italic text-gray-700 font-serif">
            "India's most loved Food app{" "}
            <span className="text-purple-400">Foodie</span>"
          </h3>
        </div>
        <img className="w-96 mt-2 md:m-0" src={FOOD_IMG}></img>
      </div>

      {/* <UserClass name={"Shiva Choudhary"} /> */}
    </>
  );
};

export default About;
