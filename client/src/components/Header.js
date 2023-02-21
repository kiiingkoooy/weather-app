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
    <div className="bg-blue-600 w-full border-b shadow-sm ">
      <header className="py-5 px-2">
        <ul className="flex justify-between items-center mr-5 ml-5">
          <div className="flex cursor-pointer" onClick={() => navigate("/")}>
            <BsFillCloudyFill className="md:text-[50px] min-[320px]:text-[40px] text-blue-200" />
            <li className="flex ml-3 items-center md:text-[25px] min-[320px]:text-[20px] text-blue-100 font-semibold">
              Weather Forecast
            </li>
          </div>
          {localStorage.getItem("accessToken") !== null && (
            <li
              className="flex cursor-pointer md:text-[20px] min-[320px]:text-[15px] text-blue-100 font-semibold"
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
