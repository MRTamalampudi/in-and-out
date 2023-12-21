import React from "react";
import styles from "./owe-form.module.scss";
import { Popover } from "@mantine/core";

interface OweFormProps {}

const OweForm = ({

}:OweFormProps) => {
    return (
        <Popover
            position={"bottom"}
            withArrow={true}
            width={320}
            radius={"md"}
        >
            <Popover.Target>
                  <span
                      className={styles.lent}
                  >
                      Lent $30
                  </span>
            </Popover.Target>
            <Popover.Dropdown>
                {/*<Table*/}
                {/*    title={"testing"}*/}
                {/*    usePagination={false}*/}
                {/*    height={320}*/}
                {/*    metaRow={false}*/}
                {/*>*/}
                {/*    <tbody>*/}
                {/*    <tr>*/}
                {/*        <td>Maria Anders</td>*/}
                {/*        <td>Germany</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Francisco Chang</td>*/}
                {/*        <td>Mexico</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Roland Mendel</td>*/}
                {/*        <td>Austria</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Helen Bennett</td>*/}
                {/*        <td>UK</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Yoshi Tannamuri</td>*/}
                {/*        <td>Canada</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Helen Bennett</td>*/}
                {/*        <td>UK</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Yoshi Tannamuri</td>*/}
                {/*        <td>Canada</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>Maria Anders</td>*/}
                {/*        <td>Germany</td>*/}
                {/*    </tr>*/}
                {/*    </tbody>*/}
                {/*</Table>*/}
            </Popover.Dropdown>
        </Popover>
    )
}

export default OweForm;
