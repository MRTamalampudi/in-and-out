import React, { Dispatch, memo, SetStateAction } from "react";
import { Checkbox } from "@mantine/core";
import { selectAllHandler } from "../../utils/selectionHandler";

type TheadProps<T extends { id: number }> = {
    children: React.ReactNode;
    data?: T[];
    setSelection?: Dispatch<SetStateAction<T[]>>;
};

function Thead<T extends {id:number}>(
    {
        children,
        data,
        setSelection,
    }:TheadProps<T>
) {

    function handleSelection(checked:boolean) {
        if (setSelection) {
            setSelection((prevState) => {
                return selectAllHandler(data!, prevState, checked);
            });
        }
    }

    function renderCheckBox() {
        return (
            <>
                {setSelection && (
                    <td>
                        <Checkbox
                            size={"xs"}
                            onChange={(event) =>
                                handleSelection(event.currentTarget.checked)
                            }
                        />
                    </td>
                )}
            </>
        );
    }

  return (
      <thead>
          <tr>
              {renderCheckBox()}
              {children}
              <td className={"flex-basis-1/20"}>

              </td>
          </tr>
      </thead>
  )
}

export default Thead;