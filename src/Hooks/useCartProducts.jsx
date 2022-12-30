import { useQuery } from "@tanstack/react-query";

const useCartProducts = (email) => {
  const {
    data: cartProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["email"],
    queryFn: () =>
      fetch(`http://localhost:5000/cartProduct/${email}`).then((res) =>
        res.json()
      ),
  });
  return [cartProducts, isLoading, refetch];
};
export default useCartProducts;
