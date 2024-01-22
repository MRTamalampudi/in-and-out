import styles from "./component-stack.module.scss";
import React from "react";

type ComponentStackProps = {
    components: JSX.Element[];
};
const ComponentStack = ({components}:ComponentStackProps) => {
  return (
      <div className={styles.componentStack}>
          <span className={styles.extra}> +1 Other</span>
          <div className={styles.components}>
              {
                  components.map(component=>component)
              }
          </div>
      </div>
  )
}

export default ComponentStack;