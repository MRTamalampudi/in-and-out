import styles from "./table.module.scss";
import {Skeleton, TextInput, Tooltip} from "@mantine/core";
import {filterOutline, sortOutline} from "../../assets/icons";
import React, { memo } from "react";
import {useTranslation} from "react-i18next";

export type MetaRowProps = {
    title?: string;
    totalElements?: number;
};

const MetaRow = ({
    title,
    totalElements,
}:MetaRowProps) => {

    console.log("Meta Row render")

    const { t } = useTranslation();

    return (
        <div className={styles.metaRow}>
            <div className={styles.right}>
                <span
                    className={styles.title}>
                    {t(title)}
                </span>
                <span className={styles.entries}>
                    {totalElements == undefined ?
                        <Skeleton
                            height={8}
                            mt={6}
                            width="70%"
                            radius="xl"
                        /> :
                        `(#${totalElements})`
                    }

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

export default memo(MetaRow);