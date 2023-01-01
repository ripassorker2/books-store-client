import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useRole from "../../../Hooks/useRole";

const Charts = () => {
  const { user } = useContext(AuthContext);
  const isRole = useRole(user?.email);
  console.log(isRole);

  return (
    <div>
      <h1>Charts</h1>
    </div>
  );
};

export default Charts;
