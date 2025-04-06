/* eslint-disable import/order */
import { registerUser } from "@/srcservices/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User Registration Successfully.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
