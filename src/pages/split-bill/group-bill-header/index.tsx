import React from 'react';
import styles from './group-bill-header.module.scss';
import {netflix, scenery} from "../../../assets";
import {Menu, Popover} from "@mantine/core";
import {Icon, Table} from "components";
import {trashOutline} from "../../../assets/icons";
import Lent from "./lent";
import Owe from "./owe";
import {EditIcon} from "../../../components/icons/edit-icon";

interface GroupBillHeaderProps {

}

const GroupBillHeader = (
    {}:GroupBillHeaderProps
) => {

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
                        <EditIcon width={24} height={24}/>
                        <Icon src={trashOutline} size={"xl"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupBillHeader;

