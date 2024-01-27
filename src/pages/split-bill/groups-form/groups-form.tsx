import styles from "./groups-form.module.scss"
import { useSearchParams } from "react-router-dom";
import ModalWrapper from "components/modal";
import React from "react";
import { Button, TextInput } from "@mantine/core";

type GroupsFormProps = {

}
const GroupsForm = ({}:GroupsFormProps) => {
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
    )
}

function GroupsFormPresentation() {
    return(
        <div className={styles.GroupsForm}>
            <div className={styles.body}>
                <TextInput label={"Name"} />
            </div>
            <div className={"footer"}>
                <Button size={"compact-sm"} variant={"outline"}>
                    Clear all
                </Button>
                <Button size={"compact-sm"} type={"submit"}>
                    {"Add"}
                </Button>
            </div>
        </div>
    )
}

export default GroupsForm;