import { useLocation } from "react-router";
import styles from "./header.module.scss";
import { backOutline, notificationOutline } from "assets/icons";
import { Menu, Tooltip } from "@mantine/core";
import React from "react";
import { BaseRoutes } from "../../constants/base-routes";
import { useGlobalTranslations } from "../../locales/translation-hooks";
import TransactionTypeBadge from "components/transaction-type";
import { TransactionTypeEnum } from "enum";
import { toast } from "sonner";
import DeleteIcon from "components/icons/delete-icon";
import Checked from "components/icons/checked";

interface PageHeaderProps {

}

const PageHeader = ({}:PageHeaderProps) => {

    const {pathname} = useLocation();

    const baseRoute = pathname.split("/")[1];

    const honorBackButton = () => {
        toast('My action toast', {
            icon:<DeleteIcon height={24} width={24}/>
        });
        toast("Transaction created",{
            description:"Successfully entered transaction",
            icon: <Checked />
        });
        window.history.back();
    }

    const {global} = useGlobalTranslations();
    const routeToLocaleMap:{[BaseRoutes:string]:string} = {
        [BaseRoutes.TRANSACTIONS]: global.TRANSACTIONS,
        [BaseRoutes.SPLIT_BILL]: global.SPLIT_BILL,
        [BaseRoutes.BUDGET]: global.BUDGET,
        [BaseRoutes.SETTINGS]: global.SETTINGS,
        [BaseRoutes.USER_PROFILE]: global.USER_PROFILE,
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