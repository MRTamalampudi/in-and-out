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
import {tableRowProps} from "../../../components/table/table-row-props";
import {number} from "prop-types";

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
    const [selectionList,setSelectionList] = useState<number[]>([]);


    useEffect(()=>{
        const splitBillGroupService = new SplitBillGroupService();
        splitBillGroupService.index("")
            .then((data)=>{
                dispatch(index(data))
            })
    },[])

    const data = useSelector((state:RootState)=>state.splitBillGroup);


    const Heading = () => {
      return (
          <Thead
              data={data}
              setSelection={setSelectionList}
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
            totalElements={data.length}
        >
            {
                selectionList.length ?
                    <ActionsRow
                        data={data}
                        setSelection={setSelectionList}
                        checked={selectionList.length == data.length}
                        selectedCount={selectionList.length}
                    /> :
                    <Heading/>
            }
            <tbody>
            {
                data.map(group=> {
                    return (
                        <Group
                            key = {group.id}
                            data={group}
                            checkBoxSelected={selectionList.indexOf(group.id)>-1}
                            setSelectionList={setSelectionList}
                        />
                    )
                })
            }
            </tbody>
        </Table>
    )
}

export default Groups;






const Group =<T extends {id:number} >({data,setSelectionList,checkBoxSelected}:tableRowProps<any>) => {

    const {[SPLITBILL_ROUTES.SPLITBILL_GROUP_ID]:groupId} = useParams();
    const navigate = useNavigate();

    const updateQueryParams = () => {
      navigate(`groups/${data.id}`);
    }

    return (
        <Tr
            className={`pointer`}
            onClick={updateQueryParams}
            checkBoxSelected={checkBoxSelected}
            rowData={data}
            setSelection={setSelectionList}
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
            <td className={dataAttributes.LENT.className}>
                ${data.lentShare}
            </td>
            <td className={dataAttributes.OWE.className}>
                ${data.oweShare}
            </td>
        </Tr>
    )
}
