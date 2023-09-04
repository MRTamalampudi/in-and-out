import {useLocation} from "react-router";
import styles from "./header.module.scss";
import {backOutline, notificationOutline} from "../../assets/icons";
import {useGlobalConstants} from "constants/index";
import {Menu, Tooltip} from "@mantine/core";
import React from "react";
import {BaseRoutes} from "../../constants/base-routes";

interface PageHeaderProps {

}

const PageHeader = ({}:PageHeaderProps) => {

    const {pathname} = useLocation();

    const baseRoute = pathname.split("/")[1];

    const honorBackButton = () => {
        window.history.back();
    }

    const {globalLocales} = useGlobalConstants();
    const routeToLocaleMap:{[BaseRoutes:string]:string} = {
        [BaseRoutes.TRANSACTIONS]: globalLocales.TRANSACTIONS,
        [BaseRoutes.SPLIT_BILL]: globalLocales.SPLIT_BILL,
        [BaseRoutes.BUDGET]: globalLocales.BUDGET,
        [BaseRoutes.SETTINGS]: globalLocales.SETTINGS,
        [BaseRoutes.USER_PROFILE]: globalLocales.USER_PROFILE,
    };

    const defaultLocale:string = "Expenses";

    return (
        <>
            <div className={styles.right}>
                <img
                    src={backOutline}
                    className={"icon24"}
                    onClick={honorBackButton}
                />
                <span
                    className={styles.title}
                >
                    { routeToLocaleMap[baseRoute] || defaultLocale }
                </span>
            </div>
            <div>
                <Menu position={"bottom-end"}>
                    <Menu.Target>
                        <Tooltip label={"Notifications"} position={"left"}>
                            <img
                                src={notificationOutline}
                                className={"icon24"} />
                        </Tooltip>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Label>Application</Menu.Label>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                        <Menu.Item >Gallery</Menu.Item>

                        <Menu.Divider />

                        <Menu.Label>Danger zone</Menu.Label>
                        <Menu.Item >Transfer my data</Menu.Item>
                        <Menu.Item >Delete my account</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </>
    )
}

export default PageHeader;