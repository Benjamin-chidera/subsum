import cookie from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export const User = () => {
  const token = cookie.get("token");

  return <div>{!token ? <Navigate to={"/login"} /> : <Outlet />}</div>;
};
