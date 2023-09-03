
import React, { FC } from 'react';
import styles from './nav-bar.module.scss';
import {Link} from "react-router-dom";
import "../../styles/size.scss"
import {avatar} from "../../assets/icons";
import {BaseRoutes} from "../../constants/base-routes";
import {GlobalConstants} from "../../constants";
import {NavItem} from "components";

interface NavBarProps {}


type navItem = {
    link:string,
    label:string,
    icon:string
}


const navItems = ():navItem[] => {

    const locales = GlobalConstants().LOCALES();

    const items:navItem[] = [
        {
            link:BaseRoutes.TRANSACTIONS,
            label:locales.TRANSACTIONS,
            icon:"transactionsOutline"
        },
        {
            link:BaseRoutes.SPLIT_BILL,
            label:locales.SPLIT_BILL,
            icon:"invoiceOutline"
        },
        {
            link:BaseRoutes.BUDGET,
            label:locales.BUDGET,
            icon:"budgetOutline"
        },
    ]

    return items;
}

const NavBar = (props:NavBarProps) => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.header}>
                <i className={`${styles.logo} fa-logo`}></i>
            </div>
            <div className={styles.body}>
                {
                    navItems().map(navItem => {
                        return (
                            <Link key={navItem.label} to={`/${navItem.link}`}>
                                <NavItem label={navItem.label} icon={navItem.icon}/>
                            </Link>
                        )
                    })
                }
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
