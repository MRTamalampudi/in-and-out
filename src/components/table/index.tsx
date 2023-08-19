import React, {FC, useRef} from 'react';
import styles from './table.module.scss';
import {TextInput, Pagination, Tooltip} from "@mantine/core";
import {filterOutline, searchOutline, sortOutline} from "../../assets/icons";
import {instanceOf} from "prop-types";
import {useTranslation} from "react-i18next";

interface TableProps {
    title:string;
    children:React.ReactNode;
    entries?:boolean;
    borders?:boolean;
    rounded?:boolean;
    usePagination?:boolean;
    metaRow?:boolean;
    height?:number;
}

const Table= (
    {
        children,
        title,
        rounded = true,
        borders = true,
        usePagination = true,
        metaRow = true,
        height = undefined,
    }:TableProps) => {

    const { t } = useTranslation();

    const MetaRow = () => {
      return (
          <div className={styles.metaRow}>
              <div className={styles.right}>
                    <span
                        className={styles.title}>
                        {t(title)}
                    </span>
                  <span
                      className={styles.entries}>
                        (5 entries)
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

    
    return (
        <div
            className={
            `${styles.Table}
             ${borders ? styles.borders : ""}
             ${rounded ? styles.radius : ""}
             ${height ? "h"+height+"p" : styles.defaultHeight}
             `}
        >
            {metaRow && <MetaRow/>}
            <table className={styles.table}>
                {children}
            </table>
            {
             usePagination &&
                <div className={styles.pagination}>
                    <Pagination total={10} size={"xs"}/>
                </div>
            }
        </div>
    )
};

export default Table;
