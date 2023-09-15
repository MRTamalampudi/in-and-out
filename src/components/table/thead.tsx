import React, {Dispatch, memo, SetStateAction} from "react";
import {Checkbox} from "@mantine/core";
import {selectAllHandler} from "../../utils/selectionHandler";

type TheadProps <T extends {id:number}> = {
    children:React.ReactNode;
    data: T[],
    setSelection:Dispatch<SetStateAction<number[]>>
}

const Thead = memo(<T extends {id:number}>(
    {
        children,
        data,
        setSelection,
    }:TheadProps<T>
) => {
    
    function handleSelection(checked:boolean) {
        setSelection((prevState)=> {
            const handle = selectAllHandler(data, prevState, checked);
            return handle;
        })
    }
    
  return (
      <thead>
          <tr>
              <td>
                  <Checkbox
                      size={"xs"}
                      onChange={(event)=>handleSelection(event.currentTarget.checked)}
                  />
              </td>
              {children}
          </tr>
      </thead>
  )
})

export default Thead;