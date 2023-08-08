import React, {FC, useRef} from 'react';
import styles from './table.module.scss';
import {TextInput,Pagination} from "@mantine/core";
import {filterOutline, searchOutline, sortOutline} from "../../assets/icons";
import {instanceOf} from "prop-types";

interface TableProps {
    title:string;
    children:React.ReactNode;
    entries?:boolean;
    borders?:boolean;
    rounded?:boolean;
    usePagination?:boolean;
    metaRow?:boolean;
}

const Table= (
    {
        children,
        title,
        rounded = true,
        borders = true,
        usePagination = true,
        metaRow = true,
    }:TableProps) => {

    const MetaRow = () => {
      return (
          <div className={styles.metaRow}>
              <div className={styles.right}>
                    <span
                        className={styles.title}>
                        {title}
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
                  <img
                      src={sortOutline}
                      className={`${styles.sort} icon24`}
                  />
                  <img
                      src={filterOutline}
                      className={"icon24"}
                  />
              </div>
          </div>
      )
    }

    
    return (
        <div className={
            `${styles.Table}
             ${borders ? styles.borders : ""}
             ${rounded ? styles.radius : ""}
             `}>
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
