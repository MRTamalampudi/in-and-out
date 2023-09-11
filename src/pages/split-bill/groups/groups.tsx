import React, { FC } from 'react';
import styles from './groups.module.scss';
import Table from "../../../components/table/table";
import {netflix} from "../../../assets";
import {Checkbox, Tooltip} from "@mantine/core";
import {fakerEN_IN} from "@faker-js/faker";

interface GroupsProps {}

export type Group = {
    id:number,
    avatar:string,
    name:string,
    lent:string,
    owe:string,
}


const Groups = (
    {

    }:GroupsProps
) => {

    const data:Group[] = []

    for (let i = 0; i < 20; i++) {
        data.push({
            id:i,
            avatar:netflix,
            name: fakerEN_IN.lorem.words({min:2,max:4}),
            lent: `$${fakerEN_IN.finance.amount({min:20,max:30,dec:0})}`,
            owe: `$${fakerEN_IN.finance.amount({min:20,max:30,dec:0})}`
        })
    }

    return (
        <Table
            title={"splitBill.groups"}
        >
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
    group:Group
}



const Group = ({group}:GroupProps) => {

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
                {group.lent}
            </td>
            <td className={dataAttributes.owe.className}>
                {group.owe}
            </td>
        </tr>
    )
}
