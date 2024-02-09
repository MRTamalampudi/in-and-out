import React from "react";
import styles from "./group-bill-header.module.scss";
import { EditIcon } from "components/icons";
import DeleteIcon from "components/icons/delete-icon";
import { useParams } from "react-router-dom";
import { SPLITBILL_ROUTES } from "../routes";
import ComponentStack from "components/component-stack";
import TextAvatar from "components/text-avatar";
import { useGetSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";
import { useGetUser } from "service/react-query-hooks/user.query";

interface GroupBillHeaderProps {}

const GroupBillHeader = ({}: GroupBillHeaderProps) => {

    const { data } = useGetSplitBillGroup(1);
    const { data:currentUser} = useGetUser();
    const lentShare = data?.getCurrentLoggedInGroupMember(currentUser!).lentShare || 0;
    const oweShare = data?.getCurrentLoggedInGroupMember(currentUser!).oweShare || 0;

    const components = data?.memberList.map((member) => (
        <TextAvatar text={member.member.getFullName()} key={member.id} />
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
                        <GroupShareSummary lentShare={lentShare} oweShare={oweShare}/>
                    </div>
                    <div className={styles.right}>
                        <EditIcon
                            width={24}
                            height={24}
                            className={"error-text"}
                        />
                        <DeleteIcon
                            width={24}
                            height={24}
                            className={"error-text"}
                        />
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
