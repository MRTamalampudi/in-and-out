import React, { FC } from 'react';
import styles from './nav-item.module.scss';
import {Tooltip} from "@mantine/core";

interface NavItemProps {
    label:string;
    icon:string;
}

export const NavItem = (props:NavItemProps) => {
    return (
        <Tooltip label={props.label} position={'right'} withArrow={false}>
        <div className={`${styles.NavItem}`}>
            <span className={styles.border}></span>
            <i className={`${styles.icon} ${props.icon}`} ></i>
        </div>
        </Tooltip>
    )
}
