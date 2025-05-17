"use server";

import axiosInstance from "@/srclib/AxiosInstance";

export const updateUserDate = async (data: any) => {
  try {
    const res = await axiosInstance.patch("/profile", data);

    return res?.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
