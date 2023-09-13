import React, {FC, useEffect, useMemo, useState} from 'react';
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
import {Tr} from "../../../components/table/tbody";
import {SPLITBILL_ROUTES} from "../routes";
import {useNavigate} from "react-router";
import ActionsRow from "../../../components/table/actions-row";
import {selectAllHandler, selectionHandler} from "../../../utils/selectionHandler";
import {Transaction} from "../../../model/transacations.model";

interface GroupsProps {}

export type Group = {
    id:number,
    avatar:string,
    name:string,
    lent:string,
    owe:string,
}

const dataAttributes = {
    CHECK_BOX: {
        name: "Check box",
        className:"flex-basis-1/20",
    },
    NAME:{
        name: "Group",
        "className":"flex-basis-10/20 truncate",
    },
    LENT:{
        name: "Lent",
        "className":"flex-basis-4/20 f-14-bb primary currency",
    },
    OWE:{
        name: "Owe",
        "className":"flex-basis-4/20 f-14-bb primary-red currency",
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

    const [selectionList,setSelectionList] = useState<number[]>([]);

    const [selectAllChecked,setSelectAllChecked] = useState<boolean>(false);

    const data = useSelector((state:RootState)=>state.splitBillGroup);


    const Heading = () => {
      return (
          <thead>
              <tr>
                  <th className={dataAttributes.CHECK_BOX.className}>
                      <Checkbox size={"xs"}/>
                  </th>
                  <th className={`${styles.avatarName} ${dataAttributes.NAME.className}`}>
                      {dataAttributes.NAME.name}
                  </th>
                  <th className={dataAttributes.LENT.className}>
                      {dataAttributes.LENT.name}
                  </th>
                  <th className={dataAttributes.OWE.className}>
                      {dataAttributes.OWE.name}
                  </th>
              </tr>
          </thead>
      )
    }

    function handleSelectALl(cheked:boolean) {
        setSelectionList((prevState)=>{
            const updatsedList:number[] = selectAllHandler<SplitBillGroup>(data,selectionList,cheked);
            console.log(updatsedList);
            setSelectAllChecked(updatsedList.length == data.length);
            return updatsedList
        })
    }

    const handlesSelection= (id: number, checked: boolean) => {
        setSelectionList((prevState)=> {
            const updatedList = selectionHandler(prevState, id, checked);
            setSelectAllChecked(updatedList.length==data.length)
            return updatedList;
        })
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

    const {[SPLITBILL_ROUTES.SPLITBILL_GROUP_ID]:groupId} = useParams();
    const navigate = useNavigate();

    const updateQueryParams = () => {
      navigate(`groups/${group.id}`);
    }

    return (
        <tr className={`pointer`} onClick={updateQueryParams}>
            <td className={dataAttributes.CHECK_BOX.className}>
                <Checkbox size={"xs"}/>
            </td>
            <td className={`${styles.avatarName} ${dataAttributes.NAME.className}`}>
                <img
                    className={"icon24"}
                    src={group.avatar}
                />
                <Tooltip label={group.name} position={"bottom"}>
                    <span className={"truncate"}>
                        {group.name}
                    </span>
                </Tooltip>
            </td>
            <td className={dataAttributes.LENT.className}>
                ${group.lentShare}
            </td>
            <td className={dataAttributes.OWE.className}>
                ${group.oweShare}
            </td>
        </tr>
    )
}
