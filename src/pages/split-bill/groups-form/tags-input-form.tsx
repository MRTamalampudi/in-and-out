import { FieldValues, useController } from "react-hook-form";
import { InputProps } from "forms/inputs/input-props";
import useErrorMessage from "forms/inputs/useErrorMessage";
import { TagsInput } from "@mantine/core";
import React from "react";
import SplitBillGroupMember from "model/split-bill-group-member.model";
import { User } from "model";

const GroupsTagsInputForm = <T extends FieldValues>(props: InputProps<T>) => {
    const { label, placeholder } = props;

    const {
        field:{value,onChange,...field},
        formState: { errors },
    } = useController<T>(props);

    const errorMessage = useErrorMessage(errors, props);

    const handleOnchange = (emails:string[]) => {
        console.log(emails)
      const members = emails && emails.map(mail=>{
          const splitBillmember = new SplitBillGroupMember();
          splitBillmember.member = new User();
          splitBillmember.member.email = mail;
          return splitBillmember;
      })
        onChange(members);
    }

    console.log(errors.emails,errorMessage)
    return (
        <TagsInput
            {...field}
            label={label}
            placeholder={placeholder}
            error={errorMessage}
            clearable
            value={value && value.map((mem:any)=>mem.member.email)}
            onChange={handleOnchange}
        />
    );
};

export default GroupsTagsInputForm;