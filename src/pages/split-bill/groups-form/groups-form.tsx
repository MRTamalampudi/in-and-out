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
import { useGroupFormEssentials } from "forms/hooks/group-form.essentials";
import GroupsTagsInputForm from "pages/split-bill/groups-form/tags-input-form";
import { SplitBillGroup } from "model";
import { useCreateSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";

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

    const {schema,emptyValues,defaultValues} = useGroupFormEssentials();

    type Group = z.infer<typeof schema>;

    const { control, handleSubmit } = useForm<Group>({
        mode:"onSubmit",
        resolver:zodResolver(schema)
    });

    const mutation = useCreateSplitBillGroup({});

    const submitData = (data:SplitBillGroup) =>{
        mutation.mutate(data)
    }


    return (
        <div className={styles.GroupsForm}>
            <div className={styles.body}>
                <TextInputForm name={"name"} control={control} label={"Group name"} placeholder={"Enter group name"}/>
                <GroupsTagsInputForm
                    control={control}
                    label={"Enter member emails"}
                    name={"memberList"}
                    placeholder={"Enter email"}
                />
            </div>
            <div className={"footer"}>
                <Button size={"compact-sm"} variant={"outline"}>
                    Clear all
                </Button>
                <Button size={"compact-sm"} type={"submit"} onClick={handleSubmit((data)=>mutation.mutate(data as SplitBillGroup))}>
                    {"Add"}
                </Button>
            </div>
        </div>
    );
}

export default GroupsForm;
