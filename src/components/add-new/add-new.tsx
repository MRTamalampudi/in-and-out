import React, { FC } from 'react';
import styles from './add-new.module.scss';
import {plusOutline} from "assets/icons";

interface AddNewProps {}

const AddNew = () => {
    return (
    <div onClick={()=>console.log("tesing")} className={styles.AddNew}>
        <img src={plusOutline} className={"icon24"}/>
    </div>
    )
}

export default AddNew;
