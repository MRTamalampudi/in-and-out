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
                <NavItem label={"Books"} icon={"fa-book"}/>
                <NavItem label={"Wishlist"} icon={"fa-heart"}/>
                <NavItem label={"Subscriptions"} icon={"fa-play-circle"}/>
                <NavItem label={"Bills"} icon={"fa-data-usage"}/>
            </div>
            <div className={styles.footer}>
                <NavItem label={"Help"} icon={"fa-question-mark-circle"}/>
                <NavItem label={"Account"} icon={"fa-account-circle"}/>
            </div>
        </div>
    )
}

export default NavBar;
