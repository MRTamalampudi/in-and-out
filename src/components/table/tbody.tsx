import React, {Dispatch, HTMLProps, SetStateAction} from "react";
import styles from "./table.module.scss"
import {Checkbox} from "@mantine/core";
import {selectionHandler} from "../../utils/selectionHandler";

type tbodyProps = {
    children:React.ReactNode
}
export const Tbody = ({children}:tbodyProps) => {
  return (
      <tbody>
        {children}
      </tbody>
      )
}

type trProps <T extends {id:number}>= {
    selected?: boolean,
    children: React.ReactNode,
    rowData: T,
    setSelection:Dispatch<SetStateAction<number[]>>,
    checkBoxSelected:boolean,
} & HTMLProps<HTMLTableRowElement>
export const Tr = <T extends {id:number}>(
    {
        selected = false,
        children, onClick,
        rowData,
        setSelection,
        checkBoxSelected=false,
    }:trProps<T>) => {

    const classNames = () => {
      let className = ``;
      className = selected ? className+`${styles.cTrSelected}` : className;
      return className;
    }

    function handleSelection(id:number,checked:boolean) {
        setSelection(prevState => selectionHandler(prevState, id, checked))
    }

  return (
      <tr onClick={onClick} className={`${styles.cTr} ${classNames()} `} >
          <td>
              <Checkbox
                  size={"xs"}
                  onChange={(event)=>handleSelection(rowData.id,event.currentTarget.checked)}
                  onClick={(event)=>{event.stopPropagation()}}
                  checked={checkBoxSelected}
              />
          </td>
          {children}
      </tr>
  )
}