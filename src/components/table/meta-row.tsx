import styles from "./table.module.scss";
import { Select, Skeleton, TextInput, Tooltip } from "@mantine/core";
import { filterOutline, sortOutline } from "../../assets/icons";
import React, { memo, useCallback, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TableContext } from "components/table/context";

export type MetaRowProps = {
    title: string;
    totalElements?: number;
    children?: React.ReactNode;
};

const MetaRow = ({ title, totalElements, children }: MetaRowProps) => {
    return (
        <div className={styles.metaRow}>
            <div className={styles.right}>
                <span className={styles.title}>{title}</span>
                <span className={styles.entries}>
                    {totalElements == undefined ? (
                        <Skeleton height={8} mt={6} width="70%" radius="xl" />
                    ) : (
                        `(#${totalElements})`
                    )}
                </span>
            </div>
            <div className={styles.left}>{children}</div>
        </div>
    );
};

export default memo(MetaRow);
