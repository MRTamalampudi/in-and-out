import React, { FC } from 'react';
import styles from './modal-template.module.scss';
import Header from "../header";
import Footer from "../footer";
import ModalHeader from "components/header/modal-header";

interface ModalProps {
    children:React.ReactNode;
    onClose:()=>void;
    title:string;
    padding?:boolean,
}

const   ModalTemplate = ({
    children,
    onClose,
    title,
    padding=true,
}:ModalProps) => {
    return (
        <div className={styles.Modal}>
            <ModalHeader
                title={title}
                onClose={onClose}
            />
            <div className={`${styles.body} ${padding ? styles.padding : ""}`}>
                {children}
            </div>
        </div>
    )
}

export default ModalTemplate;
