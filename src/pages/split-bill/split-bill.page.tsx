import React, { useState } from "react";
import styles from "./split-bill.module.scss";
import BillGroup from "./bill-group";
import { plusOutline } from "../../assets/icons";
import { Menu } from "@mantine/core";

import { useTranslation } from "react-i18next";
import { SplitBillConstants } from "./split-bill-constants";
import Groups from "pages/split-bill/groups/groups";
import BillsTable from "pages/split-bill/bills-table/bills-table";
import BillsForm from "pages/split-bill/bills-form/bills-form";
import { useDispatchEvent } from "utils/useDispatchEvent";
import { CLICK_EVENT_KEYS, CustomEvents } from "constants/custom-events";
import { useSearchParams } from "react-router-dom";
import GroupsForm from "pages/split-bill/groups-form/groups-form";

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
    const [searchParams,setSearchParams] = useSearchParams();

    function setBillForm() {
        searchParams.set("newBill","true")
        setSearchParams(searchParams);
    }

    function setGroupForm() {
        searchParams.set("newGroup","true")
        setSearchParams(searchParams)
    }

    const dispatchEvent = useDispatchEvent();

    return (
        <>
            <div className={"d-none"}>
                <BillsForm/>
                <GroupsForm/>
            </div>
            <Menu position={"left-end"}>
                <Menu.Target>
                    <div className={styles.addNew}>
                        <img src={plusOutline} className={"icon24"} />
                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item onClick={setBillForm}>
                        {"New Bill"}
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item onClick={setGroupForm}>
                        {"New Group"}
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    );
};

export default SplitBillPage;
