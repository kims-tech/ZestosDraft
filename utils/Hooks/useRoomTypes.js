import { useState } from "react";
import { useQuery } from "react-query";
import roomTypeAPi from "../Api/roomType.api";

const useRoomTypes = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  const { refetch } = useQuery({
    queryFn: roomTypeAPi.getAllRoomType,
    queryKey: "getAllRoomType",
    onSuccess: (data) => {
      setRoomTypes(data.data);
    },
  });
  return { roomTypes, refetch };
};

export default useRoomTypes;
