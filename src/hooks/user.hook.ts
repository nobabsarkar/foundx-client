import { getUserData } from "@/srcservices/GetUserData";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["GET_USER"],
    queryFn: async () => await getUserData(),
  });
};
