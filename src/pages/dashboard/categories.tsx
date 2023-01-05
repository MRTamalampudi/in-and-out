import Card from "../../components/atoms/card/card";
import CategoryCard from "../../components/atoms/category-card/category-card";

import styles from "./dashboard.module.scss"

export const CategoriesSummary = () => {
  return (
      <Card title={"Categories"} seeAll={true}>
          <div className={styles.categoryContainer}>
              <CategoryCard/>
              <CategoryCard/>
              <CategoryCard/>
              <CategoryCard/>
          </div>
      </Card>
  )
}