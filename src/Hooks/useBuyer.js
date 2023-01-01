import { useEffect, useState } from 'react';

const useBuyer = (email) => {
    const [isBuyer, setIsbuyer] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://localhost:5000/user/buyer/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("book-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsbuyer(data);
          setLoading(false);
        });
    }, [email]);
    return [isBuyer, loading];
};

export default useBuyer;