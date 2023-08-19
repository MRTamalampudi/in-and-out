import React, { FC } from 'react';
import styles from './groups.module.scss';
import Table from "../../../components/table";
import {netflix} from "../../../assets";
import {Checkbox} from "@mantine/core";

interface GroupsProps {}

export type Group = {
    avatar:string,
    name:string,
    lent:string,
    owe:string,
}


const Groups = (
    {

    }:GroupsProps
) => {

    const data:Group[] = [
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
        {
            avatar:netflix,
            name: "RGUKT Memories",
            lent: "$30",
            owe: "$20"
        },
    ]

    return (
        <Table title={"splitBill.groups"}>
            <tbody>
            {
                data.map(group=> {
                    return (
                        <Group group={group}/>
                    )
                })
            }
            </tbody>
        </Table>
    )
}

export default Groups;


interface GroupProps {
    group:Group
}



const Group = ({group}:GroupProps) => {

    const dataAttributes = {
        "checkBox": {
            "className":"flex-basis-2/20",
        },
        "avatar":{
            "className":"flex-basis-2/20",
        },
        "name":{
            "className":"flex-basis-15/20",
        },
        "lent":{
            "className":"flex-basis-3/20 f-14-bb primary",
        },
        "owe":{
            "className":"flex-basis-2/20 f-14-bb primary-red",
        }
    }
    return (
        <tr>
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
                {group.name}
            </td>
            <td className={dataAttributes.lent.className}>
                {group.lent}
            </td>
            <td className={dataAttributes.owe.className}>
                {group.owe}
            </td>
        </tr>
    )
}
