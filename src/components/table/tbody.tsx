import React, {HTMLProps} from "react";
import styles from "./table.module.scss"

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

type trProps = {
    selected?: boolean,
    children: React.ReactNode
} & HTMLProps<HTMLTableRowElement>
export const Tr = ({
                       selected = false,
                       children,
                       onClick
}:trProps) => {

    const classNames = () => {
      let className = ``;
      className = selected ? className+`${styles.cTrSelected}` : className;
      return className;
    }

  return (
      <tr onClick={onClick} className={`${styles.cTr} ${classNames()} `} >
          {children}
      </tr>
  )
}