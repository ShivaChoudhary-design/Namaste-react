import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [userName, setUserName] = useState("");
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const updateUserDetail = (key, value) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    <>
      <div className="absolute left-0 right-0">
        <img
          className="h-screen object-fill w-full"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,c_fill/f44bc9708c514cd2dd6ae0d8b4677214"
          }
          alt="bac-img"
        />
      </div>
      <div className="absolute w-10/12 md:w-4/12 mx-auto my-20 right-0 left-0 text-white rounded-lg p-10 bg-blue-400 bg-opacity-80">
        <div className="flex flex-col  ">
          <div className="font-medium text-2xl mb-8 text-start">
            Get Started Now
          </div>
          <div className="flex flex-col gap-4">
            {!isSignIn ? (
              <div>
                <div className="text-xs font-semibold">Name</div>
                <input
                  className="w-full p-2 text-xs rounded text-black"
                  placeholder="Enter your name"
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </div>
            ) : null}

            <div>
              <div className="text-xs font-semibold">Email Id</div>
              <input
                onChange={(e) => updateUserDetail("email", e.target.value)}
                className="w-full p-2 text-xs rounded text-black"
                placeholder="Enter your email"
              ></input>
            </div>
            <div>
              <div className="text-xs font-semibold">Password</div>
              <input
                type="password"
                onChange={(e) => updateUserDetail("password", e.target.value)}
                className="w-full p-2 text-xs rounded text-black"
                placeholder="Enter your password"
              ></input>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox"></input>
              <div className="text-xs">I agree to the terms & policy</div>
            </div>

            <button className="w-full p-2 bg-zinc-700 rounded">
              {" "}
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <div className="text-center">or</div>
            {isSignIn ? (
              <div
                onClick={() => setIsSignIn(false)}
                className="text-center font-semibold"
              >
                New here?
                <span className="text-red-700 cursor-pointer">
                  {" "}
                  Sign Up now.{" "}
                </span>
              </div>
            ) : (
              <div
                onClick={() => setIsSignIn(true)}
                className="text-center font-semibold"
              >
                Already Registered
                <span className="text-red-700 cursor-pointer">
                  {" "}
                  Sign In now.{" "}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
