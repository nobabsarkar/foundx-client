import envConfig from "@/srcconfig/env.config";
import { delay } from "@/srcutils/delay";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`
  );

  await delay(5000);

  return res.json();
};
