
import React, { FC } from 'react';
import styles from './nav-bar.module.scss';
import {NavItem} from "../atoms/nav-item/nav-item";
import {Link} from "react-router-dom";
import "./icons.scss"
import "../../styles/size.scss"

import {avatar} from "../../assets/icons";
import {BaseRoutes} from "../../constants/base-routes";

interface NavBarProps {}

const NavBar = (props:NavBarProps) => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.header}>
                <i className={`${styles.logo} fa-logo`}></i>
            </div>
            <div className={styles.body}>
                <Link to={`/${BaseRoutes.TRANSACTIONS}`}>
                    <NavItem label={"Transactions"} icon={"transactionsOutline"}/>
                </Link>
                <Link to={`/${BaseRoutes.SPLIT_BILL}`} >
                    <NavItem label={"Split Bill"} icon={"invoiceOutline"}/>
                </Link>
                <Link to={'/dashboard'}>
                    <NavItem label={"Budget"} icon={"budgetOutline"}/>
                </Link>
            </div>
            <div className={styles.footer}>
                <Link to={`/${BaseRoutes.SETTINGS}`}>
                    <NavItem label={"Settings"} icon={"settingsOutline"}/>
                </Link>
                <Link to={'/settings'}>
                    <NavItem label={"Settings"} icon={"logoutOutline"}/>
                </Link>
                <Link to={'/profile'} className={styles.profile}>
                    <img src={avatar} className={"icon32 mt-8"}/>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;
