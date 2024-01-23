import styles from "./component-stack.module.scss";
import React from "react";

type ComponentStackProps = {
    components: JSX.Element[];
    stackSize?: number;
};
const ComponentStack = ({ components, stackSize = 5 }: ComponentStackProps) => {
    const overflow =
        components.length > stackSize ? components.length - stackSize : 0;

    const overflowStr =
        overflow > 0
            ? overflow > 1
                ? `${overflow}+ others`
                : `${overflow}+ other`
            : null;

    return (
        <div className={styles.componentStack}>
            {
                overflow ? <span className={styles.extra}>{overflowStr}</span> : null
            }
            <div className={styles.components}>
                {components.slice(0,stackSize).map((component) => component)}
            </div>
        </div>
    );
};

export default ComponentStack;
