import React, { FC } from 'react';
import styles from './nav-item.module.scss';
import {Tooltip} from "@mantine/core";
import * as icons from "../../../assets/icons"

interface NavItemProps {
    label:string;
    icon:string;
}

export const NavItem = ({label,icon}:NavItemProps) => {

    const iconSrc = icons[icon as keyof typeof icons];

    return (
        <Tooltip label={label} position={'right'} withArrow={false}>
        <div className={`${styles.NavItem}`}>
            <span className={styles.border}></span>
            <img src={iconSrc} className={"icon24"}/>
        </div>
        </Tooltip>
    )
}
