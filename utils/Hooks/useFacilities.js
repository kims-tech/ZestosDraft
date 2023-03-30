import { useState } from "react";
import { useQuery } from "react-query";
import featureApi from "../Api/features.api";

const useFacilites = () => {
  const [features, setFeatures] = useState([]);
  const { refetch } = useQuery({
    queryFn: featureApi.getAllAminites,
    queryKey: "getAllFeatures",
    onSuccess: (data) => {
      setFeatures(data.data);
    },
  });
  return { features, refetch };
};
export default useFacilites;
