import { useQuery } from "@tanstack/react-query";

const useWishListProducts = (email) => {
  const {
    data: whisListProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["email"],
    queryFn: () =>
      fetch(`http://localhost:5000/whisList/${email}`).then((res) =>
        res.json()
      ),
  });
  return [whisListProducts, isLoading, refetch];
};
export default useWishListProducts;
