import React from "react";
import styles from "./group-bill-header.module.scss";
import DeleteIcon from "components/icons/delete-icon";
import ComponentStack from "components/component-stack";
import TextAvatar from "components/text-avatar";
import { useDeleteSplitBillGroup, useGetSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";
import { useGetUser } from "service/react-query-hooks/user.query";
import { splitBillRoute } from "pages/split-bill/routes";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Tooltip } from "@mantine/core";
import AddUserIcon from "components/icons/add-user-icon";
import { AddMembers } from "pages/split-bill/groups-form/add-members";
import DeleteConfirmationModal from "components/delete-confirmation-modal";
import { toast } from "sonner";

interface GroupBillHeaderProps {}

function AddMember() {
    const navigate = useNavigate();
    const handleOnClick = ()=> {
        navigate({search:(prev)=>({...prev,addMembers:true})})
    }
    return (
        <>
            <div onClick={handleOnClick} className={"pointer"} style={{display:"flex",justifyContent:"center"}}>
                <Tooltip label={"Add members"}>
                    <AddUserIcon className={"grayIcon"}/>
                </Tooltip>
            </div>
            <AddMembers />
        </>
    );
}

const GroupBillHeader = ({}: GroupBillHeaderProps) => {

    const {group} = useSearch({from:splitBillRoute.fullPath});
    const { data } = useGetSplitBillGroup(group || 0);
    const deleteGroup = useDeleteSplitBillGroup({
        onSuccess:()=>{
            toast("Successfully deleted group");
        }
    })
    const { data:currentUser} = useGetUser();
    const lentShare = data?.getCurrentLoggedInGroupMember(currentUser!).lentShare || 0;
    const oweShare = data?.getCurrentLoggedInGroupMember(currentUser!).oweShare || 0;

    const components = data?.memberList.map((member) => (
        <Tooltip label={member.member.getFullName()} position={"bottom"}>
            <TextAvatar text={member.member.getFullName()} key={member.id} />
        </Tooltip>
    ));

    return (
        <div className={styles.GroupBillHeader}>
            <div className={styles.groupAvatar}>
                <TextAvatar
                    text={data?.name! || ""}
                    size={"xl"}
                    radius={"md"}
                />
            </div>
            <div className={styles.groupDetails}>
                <div className={styles.title}>{data?.name}</div>
                <div className={styles.details}>
                    <div className={styles.left}>
                        <ComponentStack components={components || []} />
                        <AddMember/>
                        <GroupShareSummary lentShare={lentShare} oweShare={oweShare} />
                    </div>
                    <div className={styles.right}>
                        <DeleteConfirmationModal context={"Group"} primary={()=>deleteGroup.mutate([data?.id!])}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

type GroupShareSummary = {
    lentShare:number;
    oweShare:number;
}

const GroupShareSummary = ({ lentShare, oweShare }:GroupShareSummary) => (
    <div className={styles.billShares}>
        You lent
        <span className={styles.lent}>${lentShare}</span>
        and owe
        <span className={styles.owes}>${oweShare}</span>
    </div>
);

export default GroupBillHeader;
