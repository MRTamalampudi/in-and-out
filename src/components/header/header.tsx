import styles from "./header.module.scss"
import {backOutline, dClose} from "../../assets/icons";
import React from "react";
import {func} from "prop-types";

interface HeaderProps {
    back?:boolean;
    title?:string;
    onClose?:()=>void;
    notification?:boolean;
}

function Header(
    {
        back,
        title,
        onClose,
        notification
    }:HeaderProps) {

    
    function BackButton() {
        return (
            back ? (
                <img
                    src={backOutline}
                    className={"icon24"}
                    onClick={honorBackButton}
                />
            ) : null
        );
    }

    function CloseButton() {
        return onClose ? (
            <img
                src={dClose}
                className={`${styles.close} icon24`}
                onClick={onClose}
            />
        ) : null;
    }

    return (
        <div className={styles.Header}>
            <div className={styles.left}>
                <BackButton/>
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.right}>
                <CloseButton/>
            </div>
        </div>
    );
}


function honorBackButton() {
    window.history.back();
}

export default Header;