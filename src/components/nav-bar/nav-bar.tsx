
import React, { FC } from 'react';
import styles from './nav-bar.module.scss';
import {NavItem} from "../atoms/nav-item/nav-item";
import {Link} from "react-router-dom";
import "./icons.scss"
import "../../styles/size.scss"

import {avatar} from "../../assets/icons";

interface NavBarProps {}

const NavBar = (props:NavBarProps) => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.header}>
                <i className={`${styles.logo} fa-logo`}></i>
            </div>
            <div className={styles.body}>
                <Link to={'/transactions'}>
                    <NavItem label={"Transactions"} icon={"transactionsOutline"}/>
                </Link>
                <Link to={'/splitbill'} >
                    <NavItem label={"Split Bill"} icon={"invoiceOutline"}/>
                </Link>
                <Link to={'/dashboard'}>
                    <NavItem label={"Budget"} icon={"budgetOutline"}/>
                </Link>
            </div>
            <div className={styles.footer}>
                <NavItem label={"Settings"} icon={"settingsOutline"}/>
                <NavItem label={"Logout"} icon={"logoutOutline"}/>
                <img src={avatar} className={"icon32 mt-8"}/>
            </div>
        </div>
    )
}

export default NavBar;
