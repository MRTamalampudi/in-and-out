import React, { FC } from 'react';
import styles from './category-card.module.scss';

interface CategoryCardProps {}

const CategoryCard = () => {
    return(
        <div className={styles.CategoryCard}>
            <i className={`fa-account-circle ${styles.icon}`}/>
            <div className={styles.amountCategory}>
                <span className={styles.amount}>$1000</span>
                <span className={styles.category}>Food</span>
            </div>
            <div className={styles.bgDecor}>
                <span>Food</span>
            </div>
        </div>
    )
};

export default CategoryCard;
