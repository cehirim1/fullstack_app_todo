import { Outlet, Navigate } from "react-router-dom";

const AuthenticationRoutes = () => {
  const isLoggedin = true;
  return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthenticationRoutes;
