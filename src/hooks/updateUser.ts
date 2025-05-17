/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
import { updateUserDate } from "@/srcservices/UpdateUserData";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

// export const userUpdate = () => {
//   return useQuery({
//     queryKey: ["UPDATE_USER"],
//     queryFn: async () => await getUserData(),
//   });
// };

export const userUpdate = () => {
  return useMutation({
    mutationFn: async (data: any) => updateUserDate(data),
    onSuccess: () => {
      toast.success("User Updated Successfully");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};
