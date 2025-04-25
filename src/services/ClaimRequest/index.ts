/* eslint-disable no-console */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
"use server";

import axiosInstance from "@/srclib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const addClaimRequest = async (
  claimRequest: FieldValues
): Promise<any> => {
  try {
    const res = await axiosInstance.post("/claim-request", claimRequest);

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getReceivedClaimRequest = async () => {
  try {
    const res = await axiosInstance.get(
      "/claim-request/received-claim-request"
    );
    return res.data;
  } catch (error) {
    console.log("Failed to fetch data:", error);
    throw new Error("Failed to fetch data");
  }
};
