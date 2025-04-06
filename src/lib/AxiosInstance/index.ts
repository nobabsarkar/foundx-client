/* eslint-disable import/order */
import envConfig from "@/srcconfig/env.config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

export default axiosInstance;
