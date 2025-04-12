/* eslint-disable import/order */
import Container from "@/srccomponents/UI/Container";
import Sidebar from "@/srccomponents/UI/Sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="my-3 flex w-full gap-12">
        <div className="w-2/5">
          <Sidebar />
        </div>
        <div className="w-4/5">{children}</div>
      </div>
    </Container>
  );
};

export default layout;
