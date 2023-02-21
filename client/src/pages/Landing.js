import { useState, useEffect } from "react";
import { useLogin } from "../store/Store";
import Home from "./Home";

const CLIENT_ID = "4dfacd65d4ff84914779";

const Landing = () => {
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const queryString = window.location.search;
    const codeParam = queryString.slice(6);

    if (codeParam && localStorage.getItem("accessToken") === null) {
      const getAccessToken = async () => {
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setIsLoggedIn(!isLoggedIn);
            }
          });
      };
      getAccessToken();
    }
    const getUserData = async () => {
      await fetch("http://localhost:4000/getUserData", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"), //ACCESSTOKEN
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUserData(data);
        });
    };
    getUserData();
  }, [isLoggedIn, setIsLoggedIn]);

  const gitHubLogIn = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
  };

  return (
    <div className="flex justify-center">
      {localStorage.getItem("accessToken") ? (
        <div>
          <Home data={userData} />
        </div>
      ) : (
        <div className="">
          <p className="flex justify-center mb-[5%] text-[35px] font-bold pt-[8%]">
            Hello, World!
          </p>
          <p className="text-[15px] font-semibold mb-[10%]">
            Welcome to the weather forecast web application. Please login with
            your Github user to use the application and view the weather in your
            city
          </p>
          <button
            className="flex mx-auto border-2 py-2 px-4 text-white bg-blue-400 hover:bg-blue-600"
            onClick={gitHubLogIn}
          >
            Login
          </button>
        </div>
      )}
      {isLoggedIn && <div></div>}
    </div>
  );
};

export default Landing;
