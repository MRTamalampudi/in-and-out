import styles from "components/table/table.module.scss";
import React from "react";
import Tr, { Tbody } from "components/table/tbody";
import Thead from "components/table/thead";
import Pagination_ from "components/table/pagination";

type TableProps_ = {
    children: React.ReactNode;
};

const Table = ({ children }: TableProps_) => {
    return <table className={styles.table}>{children}</table>;
};

Table.Body = Tbody;
Table.Head = Thead;
Table.Row = Tr;

export default Table;
