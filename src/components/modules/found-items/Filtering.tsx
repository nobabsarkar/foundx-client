/* eslint-disable import/order */
"use client";

import { useGetCategories } from "@/srchooks/categories.hook";
import { ICategory } from "@/srctypes";
import { Button } from "@nextui-org/button";
import { RotateCw } from "lucide-react";
import { useRouter } from "next/navigation";

const Filtering = () => {
  const router = useRouter();
  const { data } = useGetCategories();
  const { data: categories } = data || [];

  const handleCategoryChange = (category) => {
    router.push(`/found-items?${category}`);
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
