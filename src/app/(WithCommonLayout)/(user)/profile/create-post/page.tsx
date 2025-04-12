/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import FXInput from "@/srccomponents/form/FXInput";
import { Button } from "@heroui/button";
import { Divider } from "@nextui-org/react";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const page = () => {
  const methods = useForm();

  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
    };
    console.log(postData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title" />

          <Divider className="my-5" />

          <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner Verification questions</h1>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center my-3">
              <FXInput
                key={field.id}
                name={`questions.${index}.value`}
                label="Question"
              />
              <Button onClick={() => remove(index)}>Remove</Button>
            </div>
          ))}

          <Divider className="my-5" />

          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default page;
