import React from "react";
import styles from "./split-bill.module.scss";
import BillGroup from "./bill-group";
import { plusOutline } from "../../assets/icons";
import { Menu } from "@mantine/core";
import Groups from "pages/split-bill/groups/groups";
import BillsForm from "pages/split-bill/bills-form/bills-form";
import GroupsForm from "pages/split-bill/groups-form/groups-form";
import {
    createLazyRoute,
    useNavigate,
    useSearch,
} from "@tanstack/react-router";
import { splitBillRoute } from "pages/split-bill/routes";
import { useGetSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";

interface SplitBillProps {}

const SplitBillPage = ({}: SplitBillProps) => {
    const { group } = useSearch({ from: splitBillRoute.fullPath });
    const { data, error, isError, isLoading } = useGetSplitBillGroup(
        group || 0,
    );

    return (
        <div className={styles.SplitBill}>
            <BillAndGroupFormModal />
            <div className={styles.left}>
                <Groups />
            </div>
            {!(!group && isError) ? (
                <div className={styles.right}>
                    <BillGroup />
                </div>
            ) : null}
        </div>
    );
};

const BillAndGroupFormModal = () => {
    const navigate = useNavigate({ from: splitBillRoute.fullPath });

    function setBillForm() {
        navigate({ search: (prev) => ({ ...prev, newBill: true }) });
    }

    function setGroupForm() {
        navigate({ search: (prev) => ({ ...prev, newGroup: true }) });
    }

    return (
        <>
            <div className={"hidden"}>
                <BillsForm />
                <GroupsForm />
            </div>
            <Menu position={"left-end"}>
                <Menu.Target>
                    <div className={styles.addNew}>
                        <img src={plusOutline} className={"icon24"} />
                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item onClick={setBillForm}>{"New Bill"}</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item onClick={setGroupForm}>{"New Group"}</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    );
};

export const LazyRoute = createLazyRoute("/split_bill")({
    component: SplitBillPage,
});
