"use server";

import axiosInstance from "@/srclib/AxiosInstance";

export const getCategories = async () => {
  try {
    // get categories data
    const { data } = await axiosInstance.get("/item-categories");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
