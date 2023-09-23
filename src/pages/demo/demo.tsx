import React from 'react';
import styles from './demo.module.scss';
import TransactionTypeCard from "../../components/transaction-type-card";
import {TransactionTypeEnum} from "../../enum";
import CustomSelectItem from "../../components/custom-select-item";
import {netflix, upi} from "../../assets";

interface DemoProps {}

const Demo = () => {

    return (
        <div className={styles.Demo}>
            <CustomSelectItem
                value={"CryptoCurrency"}
                imgUrl={upi}
            />
        </div>
    )
}

export default Demo;
