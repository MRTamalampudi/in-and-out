import React from "react";
import styles from "./group-bill-header.module.scss";
import { netflix } from "assets";
import { EditIcon } from "components/icons";
import DeleteIcon from "components/icons/delete-icon";
import { useParams } from "react-router-dom";
import { SPLITBILL_ROUTES } from "../routes";
import ComponentStack from "components/component-stack";
import TextAvatar from "components/text-avatar";
import { useGetSplitBillGroup } from "service/react-query-hooks/split-bill-group.query";

interface GroupBillHeaderProps {}

const GroupBillHeader = ({}: GroupBillHeaderProps) => {
    const { [SPLITBILL_ROUTES.SPLITBILL_GROUP_ID]: groupId } = useParams();

    const { data } = useGetSplitBillGroup(1);

    const components = data?.memberList.map((member) => (
        <TextAvatar text={member.member.getFullName()} />
    ));

    return (
        <div className={styles.GroupBillHeader}>
            <div className={styles.groupAvatar}>
                <TextAvatar text={data?.name! || ""} size={"xl"} radius={"md"} />
            </div>
            <div className={styles.groupDetails}>
                <div className={styles.title}>{data?.name}</div>
                <div className={styles.details}>
                    <div className={styles.left}>
                        {/*</div>*/}
                        <ComponentStack components={components || []} />
                        <div className={styles.billShares}>You and</div>
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

export default GroupBillHeader;
