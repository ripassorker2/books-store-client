import { useEffect, useState } from "react";
const useRole = (email) => {
  const [isRole, setIsRole] = useState("");
  const [isRoleLoading, setIsRoleLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://books-store-server-six.vercel.app/user/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsRole(data?.role);
          setIsRoleLoading(false);
        });
    }
  }, [email]);
  return [isRole, isRoleLoading];
};
export default useRole;
