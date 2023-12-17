import React, { useState } from "react";
import styles from "./split-bill.module.scss";
import Table from "../../components/table/table";
import BillGroup from "./bill-group";
import { plusOutline } from "../../assets/icons";
import { Menu } from "@mantine/core";
import BillForm from "./bill-form";
import GroupForm from "./group-form";
import { useTranslation } from "react-i18next";
import Groups from "./groups";
import { SplitBillConstants } from "./split-bill-constants";

interface SplitBillProps {}

const SplitBillPage = ({}: SplitBillProps) => {
    return (
        <div className={styles.SplitBill}>
            <BillAndGroupFormModal />
            <div className={styles.left}>
                <Groups />
            </div>
            <div className={styles.right}>
                <BillGroup />
            </div>
        </div>
    );
};

const BillAndGroupFormModal = () => {
    const { locales } = SplitBillConstants();

    const [billFormOpened, setBillFormOpened] = useState<boolean>(false);
    const [groupFormOpened, setGroupBillFormOpened] = useState<boolean>(false);
    const { t } = useTranslation();
    return (
        <>
            <div className={"modal"}>
                <BillForm
                    title={locales.NEW_BILL}
                    opened={billFormOpened}
                    setOpened={setBillFormOpened}
                />
                <GroupForm
                    title={locales.NEW_GROUP}
                    opened={groupFormOpened}
                    setOpened={setGroupBillFormOpened}
                />
            </div>
            <Menu position={"left-end"}>
                <Menu.Target>
                    <div className={styles.addNew}>
                        <img src={plusOutline} className={"icon24"} />
                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item onClick={() => setBillFormOpened(true)}>
                        {t("new", { name: "Bill" })}
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item onClick={() => setGroupBillFormOpened(true)}>
                        {t("new", { name: "Group" })}
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    );
};

export default SplitBillPage;
