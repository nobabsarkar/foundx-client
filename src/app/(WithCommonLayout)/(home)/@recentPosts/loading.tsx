/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable import/order */

// "use client";

import CardSkeleton from "@/srccomponents/UI/CardSkeleton";
import Container from "@/srccomponents/UI/Container";
import { Button } from "@heroui/button";
import Link from "next/link";

const RecentPosts = async () => {
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recenly found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
        {[...Array(9)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPosts;
