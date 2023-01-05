import { useEffect, useState } from "react";

const useWishListProducts = (email) => {
  const [whislistProduct, setWhislistProduct] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://books-store-server-six.vercel.app/whislist/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setWhislistProduct(data);
            setLoading(false);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [email, refresh, loading]);

  return [whislistProduct, loading, setRefresh, refresh];
};
export default useWishListProducts;
