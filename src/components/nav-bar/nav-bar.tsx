import React, { FC } from 'react';
import styles from './nav-bar.module.scss';
import {logo} from "../../assests/icons";
import {NavItem} from "../atoms/nav-item/nav-item";

interface NavBarProps {}

const NavBar = (props:NavBarProps) => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.header}>
                <img src={logo}/>
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
