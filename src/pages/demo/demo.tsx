import React, {FC, useState} from 'react';
import styles from './demo.module.scss';
import ModalTemplate from "../../components/modal-template";
import {TextInput} from "@mantine/core";
import {notificationOutline} from "../../assets/icons";
import Icon from "../../components/icon";
import Table from "../../components/table";
import GroupForm from "pages/split-bill/group-form";
import LentForm from "../split-bill/lent-form";

interface DemoProps {}

const Demo = () => {
    const [opened,setOpened] = useState<boolean>(true);
    return (
        <div className={styles.Demo}>
            <LentForm
                opened={true}
                setOpened={setOpened}
            />
        </div>
    )
}

export default Demo;
