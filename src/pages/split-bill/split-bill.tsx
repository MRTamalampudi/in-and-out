import React, {useState} from 'react';
import styles from './split-bill.module.scss';
import Table from "../../components/table";
import BillGroup from "./bill-group";
import {plusOutline} from "../../assets/icons";
import {Menu} from "@mantine/core";
import BillForm from "./bill-form";
import GroupForm from "./group-form";
import {useTranslation} from "react-i18next";
import Groups from "./groups";




interface SplitBillProps {}

const SplitBill = (
    {}:SplitBillProps
) => {
    return (
        <div className={styles.SplitBill}>
            <BillAndGroupFormModal/>
            <div className={styles.left}>
                <Groups/>
            </div>
            <div className={styles.right}>
                <BillGroup/>
            </div>
        </div>
    )
}


const BillAndGroupFormModal = () => {

    const [billFormOpened,setBillFormOpened] = useState<boolean>(false);
    const [groupFormOpened,setGroupBillFormOpened] = useState<boolean>(false);
    const {t} = useTranslation();
  return (
      <>
          <div className={"modal"}>
              <BillForm
                  opened={billFormOpened}
                  setOpened={setBillFormOpened}
              />
              <GroupForm
                  opened={groupFormOpened}
                  setOpened={setGroupBillFormOpened}
              />
          </div>
          <Menu position={"left-end"}>
              <Menu.Target>
                  <div className={styles.addNew}>
                      <img src={plusOutline} className={"icon24"}/>
                  </div>
              </Menu.Target>
              <Menu.Dropdown>
                  <Menu.Item onClick={()=> setBillFormOpened(true)}>
                      {t("new",{name:"Bill"})}
                  </Menu.Item>
                  <Menu.Divider/>
                  <Menu.Item onClick={()=>setGroupBillFormOpened(true)}>
                      {t("new",{name:"Group"})}
                  </Menu.Item>
              </Menu.Dropdown>
          </Menu>
      </>
  )
}



export default SplitBill;
