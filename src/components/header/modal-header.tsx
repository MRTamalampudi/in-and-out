import { useTranslation } from "react-i18next";
import styles from "./header.module.scss";
import { dClose } from "../../assets/icons";
import React from "react";
import Header from "./header";

export type ModalHeaderProps = {
    title?: string;
    onClose?: () => void;
}

const ModalHeader = (props: ModalHeaderProps) => {
    const { t } = useTranslation();

    return (
        <Header
            {...props}
        />
    );
};

export default ModalHeader;
