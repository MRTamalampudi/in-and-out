import React, { Dispatch, HTMLProps, memo, SetStateAction, useContext } from "react";
import styles from "./table.module.scss"
import {Checkbox, Tooltip} from "@mantine/core";
import {useSelectHandler} from "utils/useSelectHandler";
import DeleteIcon from "../icons/delete-icon";
import DeleteConfirmationModal from "../delete-confirmation-modal";
import { TableContext } from "components/table/context";

type tbodyProps = {
    children:React.ReactNode
}
export const Tbody = memo(({children}:tbodyProps) => {
  return (
      <tbody>
        {children}
      </tbody>
      )
});



type trProps <T extends {id:number}>= {
    selected?: boolean,
    children: React.ReactNode,
    rowData: T,
} & HTMLProps<HTMLTableRowElement>
function Tr<T extends {id:number}>(
    {
        selected = false,
        children, onClick,
        rowData,
    }:trProps<T>){

    const classNames = () => {
      let className = ``;
      className = selected ? className+`${styles.cTrSelected}` : className;
      return className;
    }


    const {selectionList,setSelectionList} = useContext(TableContext)
    const selectionHandler = useSelectHandler();

    return (
      <tr onClick={onClick} className={`${styles.cTr} ${classNames()} `}>
          <td>
              <Checkbox
                  size={"xs"}
                  onChange={(event) =>
                      selectionHandler(rowData,event.target.checked)
                  }
                  onClick={(event) => {
                      event.stopPropagation();
                  }}
                  checked={selectionList.findIndex((value)=>value.id==rowData.id)>-1}
              />
          </td>
          {children}
      </tr>
  );
}

export default memo(Tr);
