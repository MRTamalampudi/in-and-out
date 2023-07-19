import React from 'react';
import styles from './group-bill-header.module.scss';
import {avatar} from "../../../assets/icons";
import {netflix} from "../../../assets";

interface GroupBillHeaderProps {

}

const GroupBillHeader = (
    {}:GroupBillHeaderProps
) => {
    return (
        <div className={styles.GroupBillHeader}>
            <div className={styles.groupAvatar}>
                <img
                    className={"icon100"}
                    src={avatar}
                />
            </div>
            <div className={styles.groupDetails}>
                <div className={styles.title}>
                    GroupName
                </div>
                <div className={styles.details}>
                    <div className={styles.left}>
                        <div className={styles.members}>
                            <img src={netflix}/>
                            <img src={netflix}/>
                            <img src={netflix}/>
                            <img src={netflix}/>
                            <img src={netflix}/>
                        </div>
                        <div className={styles.billShares}>
                            shares
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

