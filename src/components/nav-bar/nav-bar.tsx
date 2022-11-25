import React, { FC } from 'react';
import styles from './nav-bar.module.scss';
import {NavItem} from "../atoms/nav-item/nav-item";

interface NavBarProps {}

const NavBar = (props:NavBarProps) => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.header}>
                <i className={`${styles.logo} fa-logo`}></i>
            </div>
            <div className={styles.body}>
                <NavItem/>
                <NavItem/>
                <NavItem/>
                <NavItem/>
                <NavItem/>
            </div>
            <div className={styles.footer}>
                <NavItem/>
                <NavItem/>
            </div>
        </div>
    )
}

export default NavBar;
