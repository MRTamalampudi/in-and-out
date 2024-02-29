import React from "react";
import styles from "./nav-bar.module.scss";
import "styles/size.scss";
import { avatar } from "assets/icons";
import { NavItem } from "components";
import { Logo } from "components/icons";
import { useGetUser } from "service/react-query-hooks/user.query";
import useGlobalConstants from "constants/globals";
import { Link, useNavigate } from "@tanstack/react-router";
import { splitBillRoute } from "pages/split-bill/routes";
import axios from "axios";
import * as process from "process";

interface NavBarProps {}


type navItem = {
    link:string,
    label:string,
    icon:string
}

const NavBar = (props:NavBarProps) => {

    useGetUser();
    const {globalLocales} = useGlobalConstants();

    console.log("ok test")

    const navigate = useNavigate();

    function handleLogout() {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/logout`!)
            .then((result) => navigate({ to: "/login" }));
    }

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
                <Link  to={"/transactions"} search={{page:1,size:20}}>
                    <NavItem label={globalLocales.TRANSACTIONS} icon={"transactionsOutline"}/>
                </Link>
                <Link  to={splitBillRoute.fullPath} search={{page:1,size:20,gpage:1,gsize:20}}>
                    <NavItem label={globalLocales.SPLIT_BILL} icon={"invoiceOutline"}/>
                </Link>
                <Link  to={splitBillRoute.fullPath} search={{page:1,size:20,gpage:1,gsize:20}}>
                    <NavItem label={globalLocales.SPLIT_BILL} icon={"budgetOutline"}/>
                </Link>
            </div>
            <div className={styles.footer}>
                <Link to={splitBillRoute.fullPath} search={{page:1,size:20,gpage:1,gsize:20}}>
                    <NavItem label={"Settings"} icon={"settingsOutline"}/>
                </Link>
                <div onClick={handleLogout}>
                    <NavItem label={"Logout"} icon={"logoutOutline"}/>
                </div>
                <Link to={splitBillRoute.fullPath} search={{page:1,size:20,gpage:1,gsize:20}} className={styles.profile}>
                    <img src={avatar} className={"icon32 mt-8"}/>
                </Link>
            </div>
        </div>
    )
}

export default React.memo(NavBar);
