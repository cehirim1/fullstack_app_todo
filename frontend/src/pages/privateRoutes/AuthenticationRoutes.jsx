import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthenticationRoutes = () => {
  const isLoggedin = useSelector((state) => state);

  return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthenticationRoutes;
