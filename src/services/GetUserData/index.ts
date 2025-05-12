"use server";

import axiosInstance from "@/srclib/AxiosInstance";

export const getUserData = async () => {
  try {
    const res = await axiosInstance.get("/profile");

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
