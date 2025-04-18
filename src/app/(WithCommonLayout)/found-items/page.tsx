import Container from "@/srccomponents/UI/Container";
import Post from "@/srccomponents/UI/Post";
import axiosInstance from "@/srclib/AxiosInstance";
import { IPost } from "@/srctypes";

const page = async () => {
  const { data } = await axiosInstance("/items");

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
};

export default page;
