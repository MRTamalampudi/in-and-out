import React from 'react';
import styles from './demo.module.scss';
import TransactionTypeCard from "../../components/transaction-type-card";
import {TransactionTypeEnum} from "../../enums";
import CustomSelectItem from "../../components/custom-select-item";
import {netflix} from "../../assets";

interface DemoProps {}

const Demo = () => {

    return (
        <div className={styles.Demo}>
            <CustomSelectItem
                value={"CryptoCurrency"}
                imgUrl={netflix}
            />
        </div>
    )
}

export default Demo;
