import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../store/Store";


const PrivateRoute = () => {
  const { isLoggedIn } = useLogin();

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
