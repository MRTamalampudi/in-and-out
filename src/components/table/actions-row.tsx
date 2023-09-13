import styles from "./table.module.scss";
import {Checkbox, Tooltip} from "@mantine/core";
import {trashOutline} from "../../assets/icons";
import React, {Dispatch, SetStateAction} from "react";
import {number} from "prop-types";
import {useTranslation} from "react-i18next";
import {selectAllHandler} from "../../utils/selectionHandler";


type ActionsRowProps <T extends {id:number} >= {
    data: T[],
    setSelection:Dispatch<SetStateAction<number[]>>
    checked:boolean,
    selectedCount:number,
}

const ActionsRow = <T extends {id:number} >(
    {
        data,
        setSelection,
        checked,
        selectedCount,
    }:ActionsRowProps<T>) => {

    const {t} = useTranslation();

    function handleSelection(checked:boolean) {
        setSelection((prevState)=> {
            const handle = selectAllHandler(data, prevState, checked);
            console.log(handle);
            return handle;
        })
    }

    return (
        <thead>
            <tr className={styles.actionRow}>
                <th>
                    <Checkbox
                        checked={checked}
                        size={"xs"}
                        onChange={(event)=>handleSelection(event.currentTarget.checked)}
                    />
                </th>
                <th className={"flex-basis-19/20"}>
                    {`${selectedCount} selected`}
                </th>
                <th className={"flex-basis-1/20"}>
                    <Tooltip
                        label={"test"}
                        position={"bottom-end"}
                    >
                        <img
                            src={trashOutline}
                            className={"icon24"}
                        />
                    </Tooltip>
                </th>
            </tr>
        </thead>
    )
}

export default ActionsRow;