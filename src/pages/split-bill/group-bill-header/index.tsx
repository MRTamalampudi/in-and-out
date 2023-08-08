import React from 'react';
import styles from './group-bill-header.module.scss';
import {netflix, scenery} from "../../../assets";
import {Menu} from "@mantine/core";

interface GroupBillHeaderProps {

}

const GroupBillHeader = (
    {}:GroupBillHeaderProps
) => {

    const Lent = () => {
      return(
          <Menu
              position={"bottom-start"}
              withArrow={true}
          >
              <Menu.Target>
                  <span
                      className={styles.lent}
                  >
                      Lent $30
                  </span>
              </Menu.Target>
              <Menu.Dropdown>
                  <Menu.Label>Application</Menu.Label>
                  <Menu.Item >Settings</Menu.Item>
                  <Menu.Item >Messages</Menu.Item>
                  <Menu.Item >Gallery</Menu.Item>

                  <Menu.Divider />

                  <Menu.Label>Danger zone</Menu.Label>
                  <Menu.Item >Transfer my data</Menu.Item>
                  <Menu.Item >Delete my account</Menu.Item>
              </Menu.Dropdown>
          </Menu>
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
                            <span className={styles.owes}>
                                Owes $30
                            </span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        right
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupBillHeader;

