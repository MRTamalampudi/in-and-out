import React, { FC } from 'react';
import styles from './nav-item.module.scss';
import {accountCircle} from "../../../assests/icons";
import {Tooltip} from "@mantine/core";

interface NavItemProps {}

export const NavItem = (props:NavItemProps) => {
    return (
        <Tooltip label={"Account"} position={'right'} withArrow={true}>
        <div className={`${styles.NavItem}`}>

            <span className={styles.border}></span>
                <img src={accountCircle} className={styles.img}/>
        </div>
        </Tooltip>
    )
}
