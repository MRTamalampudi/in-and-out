import React from 'react';
import styles from './custom-select-item.module.scss';

interface CustomSelectItemProps {
    value: string;
    imgUrl: string;
}

const CustomSelectItem = ({
    value,
    imgUrl,
}:CustomSelectItemProps) => {
    return (
        <div className={styles.CustomSelectItem}>
            <img
                src={imgUrl}
                className={styles.image}
            />
            <span
                className={styles.value}
            >
                {value}
            </span>
        </div>
    )
}

export default CustomSelectItem;
