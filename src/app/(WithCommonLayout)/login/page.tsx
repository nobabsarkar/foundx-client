/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import FXForm from "@/srccomponents/form/FXForm";
import { useFormContext } from "react-hook-form";
import FXInput from "@/srccomponents/form/FXInput";

const LoginPage = () => {
  // const {} = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FXForm onSubmit={onSubmit}>
          <div className="py-3">
            <FXInput name="email" label="Email" type="email" />
          </div>
          <div className="py-3">
            <FXInput name="password" label="Password" type="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </FXForm>

        <div className="text-center">
          Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
