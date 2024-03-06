import { useContext } from "react";
import { UserContext } from "../src/contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  const { user } = useContext(UserContext);

  return user.email ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoutes;
