import styles from "./table.module.scss";
import {Checkbox, Tooltip} from "@mantine/core";
import {trashOutline} from "../../assets/icons";
import React from "react";
import {number} from "prop-types";
import {useTranslation} from "react-i18next";


interface ActionsRowProps {
    numberOfElements:number,
    selectedCount:number,
    checked:boolean,
    handleSelectALl:(checked:boolean)=>void;
}

const ActionsRow = (
    {
        selectedCount,
        numberOfElements,
        checked,
        handleSelectALl,
    }:ActionsRowProps) => {

    const {t} = useTranslation();

    return (
        <thead>
            <div className={styles.actionRow}>
                <div className={styles.right}>
                    <Checkbox
                        checked={checked}
                        size={"xs"}
                        className={"flex-basis-1/20"}
                        onChange={(event)=>handleSelectALl(event.currentTarget.checked)}
                    />
                    <span className={"flex-basis-19/20"}>{`${selectedCount} selected`}</span>
                </div>
                <div className={styles.left}>
                    <Tooltip
                        label={"test"}
                        position={"bottom-end"}
                    >
                        <img
                            src={trashOutline}
                            className={"icon24"}
                        />
                    </Tooltip>
                </div>
            </div>
        </thead>
    )
}

export default ActionsRow;