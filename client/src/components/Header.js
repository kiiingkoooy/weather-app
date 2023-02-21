import { useNavigate } from "react-router-dom";
import { useLogin } from "../store/Store";

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
        <ul className="flex justify-between mr-5 ml-5">
          <li>Weather Forecast</li>
          {localStorage.getItem("accessToken") !== null && (
            <li className="cursor-pointer" onClick={logOutHandler}>
              Logout
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
