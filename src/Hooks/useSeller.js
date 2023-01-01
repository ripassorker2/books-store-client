import { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch(`http://localhost:5000/user/seller/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("book-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data);
          setLoading(false);
        });
    }, [email]);
    return [isSeller, loading];
};

export default useSeller;