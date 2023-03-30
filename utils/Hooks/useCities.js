import { useState } from "react";
import { useQuery } from "react-query";
import cityApi from "../Api/city.api";

const useCities = () => {
  const [cities, setCities] = useState([]);
  const { refetch } = useQuery({
    queryFn: cityApi.getAllCity,
    queryKey: "getAllcities",
    onSuccess: (data) => {
      setCities(data.data);
    },
  });
  return { cities, refetch };
};
export default useCities;
