import { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://localhost:5000/user/admin/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("books-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data);
          setLoading(false);
        });
    }, [email]);
    return [isAdmin, loading];
};

export default useAdmin;