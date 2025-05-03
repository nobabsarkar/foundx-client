"use server";

import Filtering from "@/srccomponents/modules/found-items/Filtering";
import Container from "@/srccomponents/UI/Container";
import Post from "@/srccomponents/UI/Post";
import axiosInstance from "@/srclib/AxiosInstance";
import { IPost } from "@/srctypes";

const FoundItems = async ({ searchParams }: { searchParams: any }) => {
  // const params = new URLSearchParams(searchParams);

  // const { data } = await axiosInstance.get("/items");

  // const { data } = await axiosInstance.get(`/items`, {
  //   params: {
  //     searchTerm: params.get("query"),
  //     category: params.get("category"),
  //   },
  // });

  const category = searchParams?.category || "";

  const { data } = await axiosInstance.get("/items", {
    params: {
      category, // This sends category as a query param to your backend
    },
  });

  return (
    <Container>
      <Filtering />
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
};

export default FoundItems;
