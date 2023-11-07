import React from 'react';
import styles from './table.module.scss';
import {Pagination} from "@mantine/core";
import {useTranslation} from "react-i18next";
import MetaRow from "./meta-row";
import Page from "../../model/page";

type TableProps<T> = {
    title:string;
    children:React.ReactNode;
    pageData?:Page<T>;
    borders?:boolean;
    rounded?:boolean;
    usePagination?:boolean;
    metaRow?:boolean;
    height?:number;
    selectedList?:number[];
}



const Table=<T extends {} >(
    {
        children,
        title,
        rounded = true,
        borders = true,
        usePagination = true,
        metaRow = true,
        height = undefined,
        selectedList = [],
        pageData
    }:TableProps<T>) => {

    const { t } = useTranslation();

    console.log(pageData?.totalElements)
    console.log(pageData)

    
    return (
        <div
            className={
            `${styles.Table}
             ${borders ? styles.borders : ""}
             ${rounded ? styles.radius : ""}
             ${height ? "h"+height+"p" : styles.defaultHeight}
             `}
        >
            {metaRow && <MetaRow title={title} totalElements={pageData?.totalElements!}/>}
            <table className={styles.table}>
                {children}
            </table>
            {
             usePagination &&
                <div className={styles.pagination}>
                    <Pagination total={20} size={"xs"}/>
                </div>
            }
        </div>
    )
};




export default Table;
