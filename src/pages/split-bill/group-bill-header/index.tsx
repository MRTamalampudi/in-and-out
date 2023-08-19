import React from 'react';
import styles from './group-bill-header.module.scss';
import {netflix, scenery} from "../../../assets";
import {Menu, Popover} from "@mantine/core";
import {Icon, Table} from "components";
import {editOutline, trashOutline} from "../../../assets/icons";

interface GroupBillHeaderProps {

}

const GroupBillHeader = (
    {}:GroupBillHeaderProps
) => {

    const Lent = () => {
      return(
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
                  <Table
                   title={"testing"}
                   usePagination={false}
                   height={320}
                   metaRow={false}
                  >
                      <tbody>
                      <tr>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                      </tr>
                      <tr>
                          <td>Francisco Chang</td>
                          <td>Mexico</td>
                      </tr>
                      <tr>
                          <td>Roland Mendel</td>
                          <td>Austria</td>
                      </tr>
                      <tr>
                          <td>Helen Bennett</td>
                          <td>UK</td>
                      </tr>
                      <tr>
                          <td>Yoshi Tannamuri</td>
                          <td>Canada</td>
                      </tr>
                      <tr>
                          <td>Helen Bennett</td>
                          <td>UK</td>
                      </tr>
                      <tr>
                          <td>Yoshi Tannamuri</td>
                          <td>Canada</td>
                      </tr>
                      <tr>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                      </tr>
                      </tbody>
                  </Table>
              </Popover.Dropdown>
          </Popover>
      )
    }

    const Owe = () => {
      return (
          <Popover
              position={"bottom"}
              withArrow={true}
              width={320}
              radius={"md"}
          >
              <Popover.Target>
                  <span
                      className={styles.owes}
                  >
                      Owe $30
                  </span>
              </Popover.Target>
              <Popover.Dropdown>
                  <Table
                      title={"testing"}
                      usePagination={false}
                      height={320}
                      metaRow={false}
                  >
                      <tbody>
                      <tr>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                      </tr>
                      <tr>
                          <td>Francisco Chang</td>
                          <td>Mexico</td>
                      </tr>
                      <tr>
                          <td>Roland Mendel</td>
                          <td>Austria</td>
                      </tr>
                      <tr>
                          <td>Helen Bennett</td>
                          <td>UK</td>
                      </tr>
                      <tr>
                          <td>Yoshi Tannamuri</td>
                          <td>Canada</td>
                      </tr>
                      <tr>
                          <td>Helen Bennett</td>
                          <td>UK</td>
                      </tr>
                      <tr>
                          <td>Yoshi Tannamuri</td>
                          <td>Canada</td>
                      </tr>
                      <tr>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                      </tr>
                      </tbody>
                  </Table>
              </Popover.Dropdown>
          </Popover>
      )
    }

    return (
        <div className={styles.GroupBillHeader}>
            <img
                className={styles.groupAvatar}
                src={netflix}
            />
            <div className={styles.groupDetails}>
                <div className={styles.title}>
                    GroupName
                </div>
                <div className={styles.details}>
                    <div className={styles.left}>
                        <div className={styles.members}>
                            <span className={styles.extra}> +1 Other</span>
                            <img src={netflix}/>
                            <img src={netflix}/>
                            <img src={netflix}/>
                            <img src={netflix}/>
                            <img src={netflix}/>
                        </div>
                        <div className={styles.billShares}>
                            You
                            <Lent/>
                            and
                            <Owe/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Icon src={editOutline} size={"xl"}/>
                        <Icon src={trashOutline} size={"xl"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupBillHeader;

