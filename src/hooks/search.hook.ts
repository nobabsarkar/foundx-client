/* eslint-disable import/order */
import { searchItems } from "@/srcservices/Search";
import { useMutation } from "@tanstack/react-query";

export const useSearchItems = () => {
  return useMutation({
    mutationKey: ["SEARCH_ITEMS"],
    mutationFn: async (searchTerm: string) => await searchItems(searchTerm),
  });
};
