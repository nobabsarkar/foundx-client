/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import FXForm from "@/srccomponents/form/FXForm";
import FXInput from "@/srccomponents/form/FXInput";
import Loading from "@/srccomponents/UI/Loading";
import { useUser } from "@/srccontext/user.provider";
import { userUpdate } from "@/srchooks/updateUser";
import { useGetUser } from "@/srchooks/user.hook";

import { Button } from "@heroui/button";
import { useEffect, useState } from "react";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const SettingPage = () => {
  const { data } = useGetUser();

  // const methods = useForm({
  //   defaultValues: {
  //     name: data?.data?.name,
  //     email: data?.data?.email,
  //     phone: data?.data?.mobileNumber,
  //   },
  // });

  // const { user, isLoading } = useUser();

  // const { handleSubmit } = methods;

  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   console.log("hello", data);
  // };

  // const { data } = useGetUser();

  const { mutate: updateUserData, isPending: createUserPending } = userUpdate();

  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
    },
  });

  const { reset, handleSubmit } = methods;

  useEffect(() => {
    if (data?.data) {
      reset({
        name: data?.data?.name,
        email: data?.data?.email,
        mobileNumber: data?.data?.mobileNumber,
      });
    }
  }, [data, reset]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    const postData = {
      ...data,
      profilePhoto: "",
    };

    formData.append("data", JSON.stringify(postData));

    updateUserData(formData);
  };

  const handleImageUpload = (e) => {
    console.log("click", e);
  };

  return (
    <>
      {createUserPending && <Loading />}
      <FormProvider {...methods}>
        <h1 className="mb-10 text-center">Update Your Information</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gird-cols-1 lg:grid-cols-2 gap-2">
            <div className="min-w-fit flex-1">
              <FXInput label="Update Name" name="name" />
            </div>
            <div className="min-w-fit flex-1">
              <FXInput
                classNames={{
                  inputWrapper:
                    "pointer-events-none bg-default-100 cursor-not-allowed",
                }}
                label="Email"
                name="email"
                readOnly
              />
            </div>
            <div className="min-w-fit flex-1">
              <FXInput label="Update Phone" name="mobileNumber" />
            </div>
            <div className="min-w-fit flex-1">
              <label
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                htmlFor="image"
              >
                Upload image
              </label>
              <input
                onChange={(e) => handleImageUpload(e)}
                multiple
                className="hidden"
                id="image"
                type="file"
              />
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
