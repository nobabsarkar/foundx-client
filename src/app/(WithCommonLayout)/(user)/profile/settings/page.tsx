/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import FXInput from "@/srccomponents/form/FXInput";
import { FormProvider, useForm } from "react-hook-form";

const page = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <h1>Settings page</h1>
      <div className="min-w-fit flex-1">
        <FXInput label="Name" name="Name" />
      </div>
      <div className="min-w-fit flex-1">
        <FXInput label="Title" name="title" />
      </div>
    </FormProvider>
  );
};

export default page;
