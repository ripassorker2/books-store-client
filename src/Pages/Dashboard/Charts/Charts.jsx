import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useRole from "../../../Hooks/useRole";

const Charts = () => {
  const { user } = useContext(AuthContext);
  const isRole = useRole(user?.email);
  console.log(isRole);

  return (
    <div>
      <h1 className="font-semibold text-5xl text-center mt-4">Welcome</h1>
    </div>
  );
};

export default Charts;
