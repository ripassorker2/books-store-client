import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useRole from "../../Hooks/useRole";
import Loader from "../../utility/Loader/Loader";

const AdminRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isRole, isRoleLoading] = useRole(user?.email);

  const location = useLocation();

  if (loading || isRoleLoading) {
    return <Loader />;
  }

  if (user && isRole === "Admin") {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
