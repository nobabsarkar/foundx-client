/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
"use client";

import Link from "next/link";
import FXModal from "./FXModal";
import { Button } from "@heroui/button";

interface IProps {
  id: string;
}

const AuthenticationModal = ({ id }: IProps) => {
  return (
    <FXModal
      title="Authentication"
      buttonText="Claim Item"
      buttonClassName="flex-1"
    >
      <div>
        You are not currently logged in. Please login first to continue.
      </div>

      <div className="mb-4 mt-2 flex gap-2">
        <Link className="flex-1" href={`/register?redirect=found-items/${id}`}>
          <Button className="w-full">Register</Button>
        </Link>

        <Link className="flex-1" href={`/login?redirect=found-items/${id}`}>
          <Button className="w-full">Login</Button>
        </Link>
      </div>
    </FXModal>
  );
};

export default AuthenticationModal;
