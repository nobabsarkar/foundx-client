/* eslint-disable import/order */
import { getCategories } from "@/srcservices/Categories";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["GET_CATEGORIES"],
    queryFn: async () => await getCategories(),
  });
};
