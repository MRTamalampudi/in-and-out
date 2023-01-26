
import React, { FC } from 'react';
import styles from './nav-bar.module.scss';
import {NavItem} from "../atoms/nav-item/nav-item";
import {Link} from "react-router-dom";

interface NavBarProps {}

const NavBar = (props:NavBarProps) => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.header}>
                <i className={`${styles.logo} fa-logo`}></i>
            </div>
            <div className={styles.body}>
                <Link to={'/dashboard'}>
                    <NavItem label={"Wishlist"} icon={"fa-dashboard"}/>
                </Link>
                <Link to={'/books'} >
                    <NavItem label={"Books"} icon={"fa-book"}/>
                </Link>
                <Link to={'/dashboard'}>
                    <NavItem label={"Wishlist"} icon={"fa-heart"}/>
                </Link>
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
