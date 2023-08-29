import React, {Children, cloneElement, FC, isValidElement, useRef} from 'react';
import styles from './table.module.scss';
import {TextInput, Pagination, Tooltip, Checkbox} from "@mantine/core";
import {filterOutline, searchOutline, sortOutline, trashOutline} from "../../assets/icons";
import {instanceOf, number} from "prop-types";
import {useTranslation} from "react-i18next";
import Thead from "../footer/thead";
import MetaRow from "./meta-row";

interface TableProps {
    title:string;
    children:React.ReactNode;
    totalElements?:number;
    numberOfElements?:number;
    borders?:boolean;
    rounded?:boolean;
    usePagination?:boolean;
    metaRow?:boolean;
    height?:number;
    checked?:boolean;
    selectedList?:number[];
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
        checked = false,
        selectedList = [],
        totalElements,
        numberOfElements = 20,
    }:TableProps) => {

    const { t } = useTranslation();

    if(selectedList?.length){

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
            {metaRow && <MetaRow title={title} totalElements={totalElements!}/>}
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
