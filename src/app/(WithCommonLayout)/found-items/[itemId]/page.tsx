import Container from "@/srccomponents/UI/Container";
import Post from "@/srccomponents/UI/Post";
import { getPost } from "@/srcservices/post";

interface IProps {
  params: {
    itemId: string;
  };
}

const ItemDetailsPage = async ({ params: { itemId } }: IProps) => {
  const { data: post } = await getPost(itemId);

  return (
    <Container>
      <div className="mx-auto my-3 mx-w-[720px]">
        <Post key={post?._id} post={post} />
      </div>
    </Container>
  );
};

export default ItemDetailsPage;
