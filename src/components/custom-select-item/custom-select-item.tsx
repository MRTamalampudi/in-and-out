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
            <div className={styles.image}>
                <img
                    src={imgUrl}
                />
            </div>
            <span
                className={styles.value}
            >
                {value}
            </span>
        </div>
    )
}

export default CustomSelectItem;
