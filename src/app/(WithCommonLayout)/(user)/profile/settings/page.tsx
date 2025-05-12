/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import FXInput from "@/srccomponents/form/FXInput";
import { useGetUser } from "@/srchooks/user.hook";
import { Button } from "@heroui/button";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const SettingPage = () => {
  const { data } = useGetUser();
  console.log(data?.data?.name);

  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("hello", data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <h1>Settings page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gird-cols-1 lg:grid-cols-2 gap-2">
            <div className="min-w-fit flex-1">
              <FXInput label="Name" name="name" />
            </div>
            <div className="min-w-fit flex-1">
              <FXInput label="Email" name="email" />
            </div>
            <div className="min-w-fit flex-1">
              <FXInput label="Phone" name="phone" />
            </div>
            <div className="min-w-fit flex-1">
              <label
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                htmlFor="image"
              >
                Upload image
              </label>
              <input multiple className="hidden" id="image" type="file" />
            </div>
          </div>
          <Button className="mt-3" type="submit">
            Submit
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default SettingPage;
