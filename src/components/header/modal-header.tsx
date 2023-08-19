import {useTranslation} from "react-i18next";
import styles from "./header.module.scss";
import {dClose} from "../../assets/icons";
import React from "react";

interface ModalHeader {
    title:string;
    onClose?:()=>void;
}

const ModalHeader = ({
                         onClose,
                         title
                     }:ModalHeader) => {

    const { t } = useTranslation();

    return (
        <>
            <div className={styles.right}>
             <span
                 className={"f-16-b"}>
                  {t(title)}
              </span>
            </div>
            <div>
                {
                    onClose &&
                    <img
                        src={dClose}
                        className={`${styles.close} icon24`}
                        onClick={onClose}
                    />
                }
            </div>
        </>
    )
}

export default ModalHeader;