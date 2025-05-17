/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";

import { SidebarOptions } from "./SidebarOption";
import { adminLinks, userLinks } from "./constant";
import Image from "next/image";
import { useGetUser } from "@/srchooks/user.hook";

const Sidebar = () => {
  const { data } = useGetUser();

  return (
    <div>
      <div className="rounded-xl bg-default-100 p-2">
        <div className=" w-full rounded-md">
          <Image
            className="w-full"
            height={300}
            width={300}
            src={data?.data?.profilePhoto || "/default profile photo"}
            alt="profile"
          />
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{data?.data?.name}</h1>
          <p className="break-words text-sm">{data?.data?.email}</p>
          <p className="break-words text-sm">{data?.data?.mobileNumber}</p>
        </div>
        <Button
          as={Link}
          className="mt-2 w-full rounded-md"
          href={"/profile/create-post"}
        >
          Create a post
        </Button>
      </div>
      <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
        <SidebarOptions
          links={data?.data?.role === "USER" ? userLinks : adminLinks}
        />
      </div>
    </div>
  );
};

export default Sidebar;
