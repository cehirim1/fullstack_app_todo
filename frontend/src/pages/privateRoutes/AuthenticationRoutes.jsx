import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthenticationRoutes = () => {
  const isLoggedin = useSelector((state) => state);
  console.log(isLoggedin.user.token);

  return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthenticationRoutes;
