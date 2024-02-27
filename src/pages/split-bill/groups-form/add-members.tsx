import { useNavigate } from "@tanstack/react-router";
import { splitBillRoute } from "pages/split-bill/routes";
import ModalWrapper from "components/modal";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    useGetSplitBillGroup,
    useUpdateSplitBillGroup,
} from "service/react-query-hooks/split-bill-group.query";
import { useGroupFormEssentials } from "forms/hooks/group-form.essentials";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "pages/split-bill/groups-form/groups-form.module.scss";
import GroupsTagsInputForm from "pages/split-bill/groups-form/tags-input-form";
import { Button } from "@mantine/core";
import { SplitBillGroup } from "model";

export function AddMembers() {
    const { addMembers } = splitBillRoute.useSearch();
    const navigate = useNavigate({ from: splitBillRoute.fullPath });

    function handleOnClose() {
        navigate({ search: (prev) => ({ ...prev, addMembers: false }) });
    }

    return (
        <ModalWrapper
            opened={addMembers}
            onClose={handleOnClose}
            title={"Add Group"}
        >
            <AddMembersPresentation />
        </ModalWrapper>
    );
}

function AddMembersPresentation() {

    const {group:groupId} = splitBillRoute.useSearch();
    const {data:group} = useGetSplitBillGroup(groupId || 0);

    const {schema} = useGroupFormEssentials();

    type Group = z.infer<typeof schema>;

    const { control, handleSubmit } = useForm<Group>({
        mode:"onSubmit",
        resolver:zodResolver(schema),
        defaultValues:{id:group?.id,name:group?.name}
    });

    const mutation = useUpdateSplitBillGroup({});


    return (
        <div className={styles.GroupsForm}>
            <div className={styles.body}>
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
                <Button size={"compact-sm"} type={"submit"}
                        onClick={handleSubmit((data) => mutation.mutate(data as SplitBillGroup))}>
                    {"Add"}
                </Button>
            </div>
        </div>
    )
}