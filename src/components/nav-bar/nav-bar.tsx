
import React from 'react';
import styles from './nav-bar.module.scss';
import {Link} from "react-router-dom";
import "../../styles/size.scss"
import {avatar} from "../../assets/icons";
import {BaseRoutes} from "../../constants/base-routes";
import {NavItem} from "components";
import {useGlobalConstants} from "constants/index";
import globals from "../../constants/globals";
import {Logo} from "components/icons";
import { useGetUser } from "service/react-query-hooks/user.query";

interface NavBarProps {}


type navItem = {
    link:string,
    label:string,
    icon:string
}


const NavItems = ():navItem[] => {

    const {globalLocales} = useGlobalConstants();

    const items:navItem[] = [
        {
            link:BaseRoutes.TRANSACTIONS,
            label:globalLocales.TRANSACTIONS,
            icon:"transactionsOutline"
        },
        {
            link:BaseRoutes.SPLIT_BILL,
            label:globalLocales.SPLIT_BILL,
            icon:"invoiceOutline"
        },
        {
            link:BaseRoutes.BUDGET,
            label:globalLocales.BUDGET,
            icon:"budgetOutline"
        },
    ]

    return items;
}

const NavBar = (props:NavBarProps) => {

    useGetUser();

    return (
        <div className={styles.NavBar}>
            <div className={styles.header}>
                <Logo
                    height={32}
                    width={32}
                    className={"primary"}
                />
            </div>
            <div className={styles.body}>
                {
                    NavItems().map(navItem => {
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
