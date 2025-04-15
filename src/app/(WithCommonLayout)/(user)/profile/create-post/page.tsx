/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import FXDatePicker from "@/srccomponents/form/FXDatePicker";
import FXInput from "@/srccomponents/form/FXInput";
import FXSelect from "@/srccomponents/form/FXSelect";
import dateToISO from "@/srcutils/dateToISO";
import { Button } from "@heroui/button";
import { Divider } from "@nextui-org/react";
import { allDistict } from "@bangladeshi/bangladesh-address";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { useGetCategories } from "@/srchooks/categories.hook";
import FXTextarea from "@/srccomponents/form/FXTextArea";
import { ChangeEvent, useState } from "react";
import { AddIcon, TrashIcon } from "@/srcassets/icons";
import { useUser } from "@/srccontext/user.provider";

const cityOptions = allDistict()
  .sort()
  .map((city: string) => {
    return {
      key: city,
      label: city,
    };
  });

const CreatePost = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  const { user } = useUser();

  const {
    data: categoriesData,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useGetCategories();

  let categoryOption: { key: string; label: string }[] = [];

  if (categoriesData?.data && !categoryLoading) {
    categoryOption = categoriesData?.data
      ?.sort()
      .map((category: { _id: string; name: string }) => ({
        key: category._id,
        label: category.name,
      }));
  }

  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
      dateFound: dateToISO(data.dateFound),
      user: user!._id,
    };

    formData.append("data", JSON.stringify(postData));

    for (let image of imageFiles) {
      formData.append("itemImages", image);
    }

    console.log(formData.get("data"));
    console.log(formData.get("itemImages"));
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    // <div>
    //   <FormProvider {...methods}>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <FXInput name="title" label="Title" />

    //       <Divider className="my-5" />

    //       <div className="flex justify-between items-center">
    //         <h1 className="text-xl">Owner Verification questions</h1>
    //         <Button onClick={() => handleFieldAppend()}>Append</Button>
    //       </div>

    //       {fields.map((field, index) => (
    //         <div key={field.id} className="flex items-center my-3">
    //           <FXInput
    //             key={field.id}
    //             name={`questions.${index}.value`}
    //             label="Question"
    //           />
    //           <Button onClick={() => remove(index)}>Remove</Button>
    //         </div>
    //       ))}

    //       <Divider className="my-5" />

    //       <Button type="submit">Post</Button>
    //     </form>
    //   </FormProvider>
    // </div>
    <>
      <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
        <h1 className="text-2xl font-semibold">Post a found item</h1>
        <Divider className="mb-5 mt-3" />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Title" name="title" />
              </div>
              <div className="min-w-fit flex-1 border rounded-xl">
                <FXDatePicker label="Found date" name="dateFound" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Location" name="location" />
              </div>
              <div className="min-w-fit flex-1">
                <FXSelect label="City" name="city" options={cityOptions} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXSelect
                  disabled={!categorySuccess}
                  label="Category"
                  name="category"
                  options={categoryOption}
                />
              </div>
              <div className="min-w-fit flex-1">
                <label
                  className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                  htmlFor="image"
                >
                  Upload image
                </label>
                <input
                  multiple
                  className="hidden"
                  id="image"
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
            </div>

            <div>
              <div className="flex gap-5 my-5 flex-wrap">
                {imagePreviews?.length > 0 &&
                  imagePreviews?.map((imageDataUrl) => (
                    <div
                      key={imageDataUrl}
                      className="relative h-48 w-48 rounded-xl border-2 border-dashed border-default-300 p-2"
                    >
                      <img
                        className="w-full h-full object-cover object-center rounded-md"
                        src={imageDataUrl}
                        alt="item"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* <Divider className="my-5" /> */}

            <div className="flex flex-wrap-reverse gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXTextarea label="Description" name="description" />
              </div>
            </div>

            <Divider className="my-5" />

            <div className="flex justify-between items-center mb-5">
              <h1 className="text-xl">Owner verification questions</h1>
              <Button isIconOnly onClick={() => handleFieldAppend()}>
                <AddIcon />
              </Button>
            </div>

            <div className="space-y-5">
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2 items-center">
                  <FXInput label="Question" name={`questions.${index}.value`} />
                  <Button
                    isIconOnly
                    className="h-14 w-16"
                    onClick={() => remove(index)}
                  >
                    <TrashIcon />
                  </Button>
                </div>
              ))}
            </div>

            <Divider className="my-5" />
            <div className="flex justify-end">
              <Button size="lg" type="submit">
                Post
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default CreatePost;
