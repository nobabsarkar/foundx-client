/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IInput } from "@/srctypes";
import { DatePicker } from "@nextui-org/react";
import { Controller } from "react-hook-form";

interface IProps extends IInput {}

const FXDatePicker = ({ label, name }: IProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field: { value, ...fields } }) => (
          <DatePicker className="max-w-[284px]" label={label} {...fields} />
        )}
      />
    </div>
  );
};

export default FXDatePicker;
