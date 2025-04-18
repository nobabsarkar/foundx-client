/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useUser } from "@/src/context/user.provider";
import { SidebarOptions } from "./SidebarOption";
import { adminLinks, userLinks } from "./constant";
import Image from "next/image";

const Sidebar = () => {
  const { user } = useUser();

  return (
    <div>
      <div className="rounded-xl bg-default-100 p-2">
        <div className="h-[330px] w-full rounded-md">
          {/* <h1>Ekhane user er profile picture hobe</h1> */}
          <Image
            height={100}
            width={100}
            src={user?.profilePhoto || "/default profile photo"}
            alt="profile"
          />
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold">Nobab Sarkar</h1>
          <p className="break-words text-sm">nobab@gmail.com</p>
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
          links={user?.role === "USER" ? userLinks : adminLinks}
        />
      </div>
    </div>
  );
};

export default Sidebar;
