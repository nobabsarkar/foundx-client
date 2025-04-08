import { Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className=" h-screen bg-black-500/10 fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
