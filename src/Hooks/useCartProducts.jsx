import { useEffect, useState } from "react";

const useCartProducts = (email) => {
  const [cartProducts, setCartProduct] = useState([]);
  const [refreshCart, setRefreshCart] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/cart/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setCartProduct(data);
            setLoading(false);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [email, loading, refreshCart]);
  return [cartProducts, loading, setLoading, setRefreshCart];
};
export default useCartProducts;
