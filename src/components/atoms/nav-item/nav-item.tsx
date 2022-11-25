import React, { FC } from 'react';
import styles from './nav-item.module.scss';
import {Tooltip} from "@mantine/core";

interface NavItemProps {}

export const NavItem = (props:NavItemProps) => {
    return (
        <Tooltip label={"Account"} position={'right'} withArrow={true}>
        <div className={`${styles.NavItem}`}>

            <span className={styles.border}></span>
            <i className={'fa-download'}></i>
        </div>
        </Tooltip>
    )
}
