import React, {FC, useEffect, useState} from 'react';
import styles from './under-construction.module.scss';
import {Modal,Button} from "@mantine/core";
import under_construction from '../../assets/under_construction.jpg'

interface UnderConstructionProps {}

const UnderConstruction = () => {
    const [open,setOpen]=useState(true)
    return (
        <Modal centered={true} radius={10} opened={open} onClose={()=>setOpen(prevState => false)} className={styles.UnderConstruction}>
            <img src={under_construction} style={{width:'100%'}}/>
            <div className={styles.button}>
                <Button size={"xs"} onClick={()=>setOpen(prevState => false)} color={'yellow'}>Proceed to Website</Button>
            </div>
        </Modal>
    )
};

export default UnderConstruction;
