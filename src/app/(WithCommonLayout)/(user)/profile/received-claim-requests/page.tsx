/* eslint-disable prettier/prettier */
"use client";

import ClaimPostCard from "@/srccomponents/UI/Post/ClaimPostCard";
import { useGetReceivedClaimRequest } from "@/srchooks/claimRequest.hook";
import { IReceivedClaimRequest } from "@/srctypes";

const RecivedClaimRequestsPage = () => {
  const { data } = useGetReceivedClaimRequest();

  const posts = data?.data || [];

  return (
    <>
      {posts?.length ? (
        posts.map((post: IReceivedClaimRequest, index: number) => (
          <ClaimPostCard key={index} post={post} />
        ))
      ) : (
        <div className="flex min-h-screen w-full items-center justify-center rounded-md border">
          <h1 className="text-4xl">No Claim Request Received!</h1>
        </div>
      )}
    </>
  );
};

export default RecivedClaimRequestsPage;
