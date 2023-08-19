import React, { FC } from 'react';
import styles from './modal-template.module.scss';
import Header from "../header";
import Footer from "../footer";

interface ModalProps {
    children:React.ReactNode;
    onClose:()=>void;
    title:string;
    primaryAction:()=>void;
    secondaryAction?:()=>void;
    teritaryAction?:()=>void;
    padding?:boolean,
}

const ModalTemplate = ({
    children,
    onClose,
    title,
    primaryAction,
    secondaryAction,
    teritaryAction,
    padding=true,
}:ModalProps) => {
    return (
        <div className={styles.Modal}>
            <Header
                title={title}
                onClose={onClose}
            />
            <div className={`${styles.body} ${padding ? styles.padding : ""}`}>
                {children}
            </div>
            <Footer
                primaryAction={primaryAction}
                secondaryAction={secondaryAction}
                teritaryAction={teritaryAction}
            />
        </div>
    )
}

export default ModalTemplate;
