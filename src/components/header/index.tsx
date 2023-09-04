import React from 'react';
import styles from './header.module.scss';
import {backOutline, dClose, notificationOutline} from "assets/icons"
import { Menu, Tooltip} from '@mantine/core';
import {useTranslation} from "react-i18next";
import PageHeader from "./page-header";
import ModalHeader from "./modal-header";

interface HeaderProps {
    title: string,
    onClose?:()=>void;
    pageHeader?:boolean;
    close?:boolean;
}

const Header = (
    {
        title,
        onClose,
        pageHeader = false,
    } :HeaderProps
) => {

    const {t} = useTranslation();


    return (
        <div className={styles.Header}>
            {
                pageHeader ?
                    <PageHeader/> :
                    <ModalHeader
                        title={title}
                        onClose={onClose}
                    />
            }
        </div>
    )
}

export default Header;
