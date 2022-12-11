import React, {FC, useRef} from 'react';
import styles from './line-graph.module.scss';


interface LineGraphProps {}

const last7Days = () => {
}

const LineGraph= (props:LineGraphProps) => {
    const svg = useRef(null);
  return (
      <div className={styles.LineGraph}>
          <svg ref={svg} id={"chart"} viewBox={'100,0,100,100'}/>
      </div>
  )
};

export default LineGraph;
