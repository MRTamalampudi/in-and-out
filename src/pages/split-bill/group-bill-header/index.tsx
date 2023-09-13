import React from 'react';
import styles from './group-bill-header.module.scss';
import {netflix, scenery} from "assets";
import Lent from "./lent";
import Owe from "./owe";
import {EditIcon} from "components/icons";
import DeleteIcon from "components/icons/delete-icon";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux";
import {group} from "d3";
import {SPLITBILL_ROUTES} from "../routes";

interface GroupBillHeaderProps {

}

const GroupBillHeader = (
    {}:GroupBillHeaderProps
) => {

    const {[SPLITBILL_ROUTES.SPLITBILL_GROUP_ID]:groupId}=useParams();

    const data = useSelector((state:RootState)=>{
        if(groupId){
            return state.splitBillGroup.find((group)=>group.id.toString()==groupId)
        } else {
            return state.splitBillGroup.at(0);
        }
    });

    console.log(data,groupId)
    return (
        <div className={styles.GroupBillHeader}>
            <img
                className={styles.groupAvatar}
                src={netflix}
            />
            <div className={styles.groupDetails}>
                <div className={styles.title}>
                    {data?.name}
                </div>
                <div className={styles.details}>
                    <div className={styles.left}>
                        <div className={styles.members}>
                            <span className={styles.extra}> +1 Other</span>
                            <img src={netflix}/>
                            <img src={netflix}/>
                            <img src={netflix}/>
                            <img src={netflix}/>
                            <img src={netflix}/>
                        </div>
                        <div className={styles.billShares}>
                            You
                            <Lent amount={data?.lentShare!}/>
                            and
                            <Owe amount={data?.oweShare!}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <EditIcon width={24} height={24} className={"error-text"}/>
                        <DeleteIcon width={24} height={24} className={"error-text"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupBillHeader;

