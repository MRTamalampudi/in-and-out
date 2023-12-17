import React, {FC, useEffect, useMemo, useState} from 'react';
import styles from './groups.module.scss';
import Table from "../../../components/table/table";
import {netflix} from "../../../assets";
import {Checkbox, Tooltip} from "@mantine/core";
import {fakerEN_IN} from "@faker-js/faker";
import Thead from "../../../components/table/thead";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SplitBillGroupService from "../../../service/split-bill-group.service";
import {index} from "../../../redux/slice/split-bill-group.slice";
import {RootState} from "redux";
import {Tr} from "../../../components/table/tbody";
import {SPLITBILL_ROUTES} from "../routes";
import {useNavigate} from "react-router";
import ActionsRow from "../../../components/table/actions-row";
import {TableRowProps} from "../../../components/table/table-row-props";

interface GroupsProps {}

export type Group = {
    id:number,
    avatar:string,
    name:string,
    lent:string,
    owe:string,
}

const dataAttributes = {
    NAME:{
        name: "Group",
        "className":"flex-basis-12/20 truncate",
    },
    LENT:{
        name: "Lent",
        "className":"flex-basis-4/20 text-align-right",
    },
    OWE:{
        name: "Owe",
        "className":"flex-basis-4/20 text-align-right",
    }
}


const Groups = (
    {

    }:GroupsProps
) => {

    const dispatch = useDispatch();
    const [selectionList,setSelectionList] = useState<number[]>([]);


    // useEffect(()=>{
    //     const splitBillGroupService = new SplitBillGroupService();
    //     splitBillGroupService.index("")
    //         .then((data)=>{
    //             dispatch(index(data))
    //         })
    // },[])

    const data = useSelector((state:RootState)=>state.splitBillGroup);


    const Heading = () => {
      return (
          <Thead
              data={data}
          >
              <th className={`${styles.avatarName} ${dataAttributes.NAME.className}`}>
                  {dataAttributes.NAME.name}
              </th>
              <th className={dataAttributes.LENT.className}>
                  {dataAttributes.LENT.name}
              </th>
              <th className={dataAttributes.OWE.className}>
                  {dataAttributes.OWE.name}
              </th>
          </Thead>
      )
    }


    return (
        <Table
            title={"splitBill.groups"}
        >
            <Heading/>
            <tbody>
            {
                data.map(group=> {
                    return (
                        <Group
                            key = {group.id}
                            data={group}
                            checked={selectionList.indexOf(group.id)>-1}
                        />
                    )
                })
            }
            </tbody>
        </Table>
    )
}

export default Groups;






const Group =({data,checked}:TableRowProps) => {

    const {[SPLITBILL_ROUTES.SPLITBILL_GROUP_ID]:groupId} = useParams();
    const navigate = useNavigate();

    const updateQueryParams = () => {
      navigate(`groups/${data.id}`);
    }

    return (
        <Tr
            className={`pointer`}
            onClick={updateQueryParams}
            rowData={data}
        >
            <td className={`${styles.avatarName} ${dataAttributes.NAME.className}`}>
                <img
                    className={"icon24"}
                    src={data.avatar}
                />
                <Tooltip label={data.name} position={"bottom"}>
                    <span className={"truncate"}>
                        {data.name}
                    </span>
                </Tooltip>
            </td>
            <td className={`${dataAttributes.LENT.className} currency primary f-14-bb`}>
                ${data.lentShare}
            </td>
            <td className={`${dataAttributes.OWE.className} currency primary-red f-14-bb`}>
                ${data.oweShare}
            </td>
        </Tr>
    )
}
