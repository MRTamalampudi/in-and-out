import styles from "./groups-form.module.scss";
import { useSearchParams } from "react-router-dom";
import ModalWrapper from "components/modal";
import React from "react";
import { Button } from "@mantine/core";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TextInputForm } from "forms/inputs";
import TagsInputForm from "forms/inputs/tags-input-form/tags-input-form";
import { zodResolver } from "@hookform/resolvers/zod";

type GroupsFormProps = {};
const GroupsForm = ({}: GroupsFormProps) => {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleOnClose() {
        searchParams.delete("newGroup");
        setSearchParams(searchParams);
    }

    return (
        <ModalWrapper
            opened={!!searchParams.get("newGroup")}
            onClose={handleOnClose}
            title={"Add Group"}
        >
            <GroupsFormPresentation />
        </ModalWrapper>
    );
};

function GroupsFormPresentation() {

    const schema = z.object({
        name: z
            .string()
            .min(3, { message: "name should be more than 3 characters" }),
        emails: z
            .array(z.string().email({ message: "Please enter a valid email" }))
            .min(1, { message: "Please atleast provide one email" }),
    });

    type Group = z.infer<typeof schema>;

    const { control, handleSubmit } = useForm<Group>({
        mode:"onSubmit",
        resolver:zodResolver(schema)
    });



    return (
        <div className={styles.GroupsForm}>
            <div className={styles.body}>
                <TextInputForm name={"name"} control={control} label={"Group name"} placeholder={"Enter group name"}/>
                <TagsInputForm
                    control={control}
                    label={"Enter member emails"}
                    name={"emails"}
                    placeholder={"email"}
                />
            </div>
            <div className={"footer"}>
                <Button size={"compact-sm"} variant={"outline"}>
                    Clear all
                </Button>
                <Button size={"compact-sm"} type={"submit"} onClick={handleSubmit((data)=>console.log(data))}>
                    {"Add"}
                </Button>
            </div>
        </div>
    );
}

export default GroupsForm;
