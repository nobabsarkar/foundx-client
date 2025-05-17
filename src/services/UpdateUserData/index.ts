"use server";

import axiosInstance from "@/srclib/AxiosInstance";

export const updateUserDate = async (userData: any) => {
  try {
    const res = await axiosInstance.patch("/profile");

    return res?.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
