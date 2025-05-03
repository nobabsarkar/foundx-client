/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";

import { useGetCategories } from "@/srchooks/categories.hook";
import { ICategory } from "@/srctypes";
import { Button } from "@nextui-org/button";
import { RotateCw } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const Filtering = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data } = useGetCategories();
  const { data: categories } = data || [];

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const [key, value] = category.split("=");

    params.set(key, value);

    // router.push(`/found-items?${category}`);
    router.push(`/found-items?${params.toString()}`);
  };

  return (
    <div className="my-5 flex items-center justify-end">
      <div className="flex justify-center gap-1">
        {categories?.map(({ _id, name }: ICategory) => (
          <Button
            onClick={() => handleCategoryChange(`category=${name}`)}
            key={_id}
            size="sm"
            variant="ghost"
          >
            {name}
          </Button>
        ))}
        <Button className="rounded-lg" size="sm" variant="ghost">
          <RotateCw onClick={() => router.push("/found-items")} />
        </Button>
      </div>
    </div>
  );
};

export default Filtering;
