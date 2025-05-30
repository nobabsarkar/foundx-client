/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";

import { useUser } from "@/srccontext/user.provider";
import { IPost, IUser } from "@/srctypes";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { format } from "date-fns";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import ImageGellery from "./ImageGellery";
import ClaimRequestModal from "@/srccomponents/modals/ClaimRequestModal";
import AuthenticationModal from "@/srccomponents/modals/AuthenticationModal";

interface IProps {
  post: IPost;
}

const Post = ({ post }: IProps) => {
  const {
    title,
    dateFound,
    description,
    location,
    city,
    _id,
    images,
    user,
    questions,
  } = post || {};

  const { name, email, profilePhoto } = (user as IUser) || {};

  // only logged in user this is
  const { user: loggedInUser } = useUser();

  return (
    <div className="mb-2 rounded-md bg-default-100 p-4">
      <div className="border-b border-default-200 pb-2">
        <div className="flex items-center justify-between border-b border-default-200 pb-4">
          <div className="flex items-center gap-3">
            <Avatar isBordered name={name} radius="sm" src={profilePhoto} />
            <div>
              <p>{name}</p>
              <p className="text-xs">{email}</p>
            </div>
          </div>
        </div>
        <div className="border-b border-default-200 py-4">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <Link href={`/found-items/${_id}`}>
                <h1 className="cursor-pointer text-2xl">{title}</h1>
              </Link>
              <p className="flex items-center gap-1 text-xs">
                Found on: <Calendar width={14} />
                {format(new Date(dateFound), "dd MMM, yyyy")}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <MapPin width={18} />
                {location}, {city}
              </p>
            </div>
          </div>
          <p>{description}</p>
        </div>

        <ImageGellery images={images} />

        <div className="mt-4 flex gap-5">
          {email !== loggedInUser?.email && (
            <>
              {loggedInUser?.email && (
                <ClaimRequestModal id={_id} questions={questions} />
              )}

              {!loggedInUser?.email && <AuthenticationModal id={_id} />}
            </>
          )}

          {email !== loggedInUser?.email && (
            <div className="w-[1px] bg-default-200" />
          )}

          <Button variant="light" className="flex-1">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
