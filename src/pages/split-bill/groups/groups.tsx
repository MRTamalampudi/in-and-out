import React, {FC, useEffect, useMemo} from 'react';
import styles from './groups.module.scss';
import Table from "../../../components/table/table";
import {netflix} from "../../../assets";
import {Checkbox, Tooltip} from "@mantine/core";
import {fakerEN_IN} from "@faker-js/faker";
import Thead from "../../../components/table/thead";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import splitBillGroupService from "../../../service/split-bill-group.service";
import SplitBillGroupService from "../../../service/split-bill-group.service";
import {index} from "../../../redux/slice/split-bill-group-slice";
import {RootState} from "../../../redux";
import {SplitBillGroup} from "../../../model/splitBillGroups.model";

interface GroupsProps {}

export type Group = {
    id:number,
    avatar:string,
    name:string,
    lent:string,
    owe:string,
}

const dataAttributes = {
    "checkBox": {
        "className":"flex-basis-1/20",
    },
    "avatar":{
        "className":"flex-basis-2/20",
    },
    "name":{
        "className":"flex-basis-11/20 truncate",
    },
    "lent":{
        "className":"flex-basis-3/20 f-14-bb primary currency",
    },
    "owe":{
        "className":"flex-basis-3/20 f-14-bb primary-red currency",
    }
}


const Groups = (
    {

    }:GroupsProps
) => {

    const dispatch = useDispatch();


    useEffect(()=>{
        const splitBillGroupService = new SplitBillGroupService();
        splitBillGroupService.index("")
            .then((data)=>{
                dispatch(index(data))
            })
    },[])

    const data = useSelector((state:RootState)=>state.splitBillGroup);

    return (
        <Table
            title={"splitBill.groups"}
        >
            <Thead>

            </Thead>
            <tbody>
            {
                data.map(group=> {
                    return (
                        <Group
                            key = {group.id}
                            group={group}/>
                    )
                })
            }
            </tbody>
        </Table>
    )
}

export default Groups;


interface GroupProps {
    group:SplitBillGroup
}



const Group = ({group}:GroupProps) => {

    return (
        <tr className={`pointer`}>
            <td className={dataAttributes.checkBox.className}>
                <Checkbox size={"xs"}/>
            </td>
            <td className={dataAttributes.avatar.className}>
                <img
                    className={"icon24"}
                    src={group.avatar}
                />
            </td>
            <td className={dataAttributes.name.className}>
                <Tooltip label={group.name} position={"bottom"}>
                    <span>
                        {group.name}
                    </span>
                </Tooltip>
            </td>
            <td className={dataAttributes.lent.className}>
                {group.lentShare}
            </td>
            <td className={dataAttributes.owe.className}>
                {group.oweShare}
            </td>
        </tr>
    )
}
