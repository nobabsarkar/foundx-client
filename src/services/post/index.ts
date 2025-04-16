/* eslint-disable @typescript-eslint/no-unused-vars */

"use server";

import axiosInstance from "@/srclib/AxiosInstance";

export const createPost = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    throw new Error("Failed to create post");
  }
};
