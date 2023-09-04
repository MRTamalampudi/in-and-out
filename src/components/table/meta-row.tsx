import styles from "./table.module.scss";
import {TextInput, Tooltip} from "@mantine/core";
import {filterOutline, sortOutline} from "../../assets/icons";
import React from "react";
import {useTranslation} from "react-i18next";

interface MetaRowProps {
    title:string,
    totalElements:number,
}

const MetaRow = ({
    title,
    totalElements,
}:MetaRowProps) => {

    const { t } = useTranslation();

    return (
        <div className={styles.metaRow}>
            <div className={styles.right}>
                    <span
                        className={styles.title}>
                        {t(title)}
                    </span>
                <span
                    className={styles.entries}>
                       {`(${totalElements} entries)`}
                    </span>
            </div>
            <div className={styles.left}>
                <TextInput
                    placeholder={"search"}
                    size={"xs"}
                    className={`${styles.search}`}
                />
                <Tooltip
                    label={t("splitBill.sort",{context:t(title)})}
                    position={"bottom-end"}
                >
                    <img
                        src={sortOutline}
                        className={"icon24"}
                    />
                </Tooltip>
                <Tooltip
                    label={t("splitBill.filter",{context:t(title)})}
                    position={"bottom-end"}
                >
                    <img
                        src={filterOutline}
                        className={"icon24"}
                    />
                </Tooltip>
            </div>
        </div>
    )
}

export default MetaRow;