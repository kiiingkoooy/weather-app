import { useNavigate } from "react-router-dom";
import { useLogin } from "../store/Store";
import { BsFillCloudyFill } from "react-icons/bs";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(!isLoggedIn);
    navigate("/");
  };

  return (
    <div className="bg-blue-600 border-b shadow-sm top-0 z-40">
      <header className="py-5 px-2">
        <ul className="flex justify-between items-center mr-5 ml-5">
          <div className="flex cursor-pointer" onClick={() => navigate("/")}>
            <BsFillCloudyFill className="text-[50px] text-blue-200" />
            <li className="flex ml-3 items-center text-[25px] text-blue-100 font-semibold">
              Weather Forecast
            </li>
          </div>
          {localStorage.getItem("accessToken") !== null && (
            <li
              className="flex cursor-pointer text-[20px] text-blue-100 font-semibold"
              onClick={logOutHandler}
            >
              Logout
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
