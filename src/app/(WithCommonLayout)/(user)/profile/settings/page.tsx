/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import FXForm from "@/srccomponents/form/FXForm";
import FXInput from "@/srccomponents/form/FXInput";
import { useUser } from "@/srccontext/user.provider";
import { useGetUser } from "@/srchooks/user.hook";
import { Button } from "@heroui/button";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const SettingPage = () => {
  // const { data } = useGetUser();
  // const methods = useForm();

  const { user, isLoading } = useUser();
  console.log(user);

  const methods = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.mobileNumber,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("hello", data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <h1 className="mb-10 text-center">Update Information</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gird-cols-1 lg:grid-cols-2 gap-2">
            <div className="min-w-fit flex-1">
              <FXInput label="Update Name" name="name" />
            </div>
            <div className="min-w-fit flex-1">
              <FXInput label="Email" name="email" />
            </div>
            <div className="min-w-fit flex-1">
              <FXInput label="Update Phone" name="phone" />
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
