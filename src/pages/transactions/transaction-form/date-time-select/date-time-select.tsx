import React, { FC } from 'react';
import {FieldValues, useController} from "react-hook-form";
import {InputProps} from "../input-props";
import {DateTimePicker} from "@mantine/dates";

const DateTimeSelect = <T extends FieldValues>(props:InputProps<T>) => {
  const {field} = useController<T>(props);

  return (
      <DateTimePicker
          {...field}
          label={props.label}
          placeholder={props.placeholder}
          maw={400}
          mx="auto"
          size={"xs"}
          valueFormat="DD MMM YYYY hh:mm A"
      />
  )
}

export default DateTimeSelect;
