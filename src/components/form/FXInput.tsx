/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
// /* eslint-disable import/order */
// /* eslint-disable react/jsx-sort-props */
// "use client";

// import { IInput } from "@/srctypes";
// import { Input } from "@nextui-org/input";
// import { useFormContext } from "react-hook-form";

// interface IProps extends IInput {}

// const FXInput = ({
//   variant = "bordered",
//   size = "md",
//   required = false,
//   type = "text",
//   label,
//   name,
// }: IProps) => {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <Input
//       {...register(name)}
//       errorMessage={errors[name] ? (errors[name].message as string) : ""}
//       isInvalid={!!errors[name]}
//       variant={variant}
//       size={size}
//       required={required}
//       type={type}
//       label={label}
//     />
//   );
// };

// export default FXInput;

"use client";

import { IInput } from "@/srctypes";
import { Input } from "@nextui-org/input";
import { useFormContext, Controller } from "react-hook-form";

interface IProps extends IInput {}

// change this full code
const FXInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          variant={variant}
          size={size}
          required={required}
          type={type}
          label={label}
          errorMessage={errors[name]?.message as string}
          isInvalid={!!errors[name]}
        />
      )}
    />
  );
};

export default FXInput;
