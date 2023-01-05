import * as d3 from "d3";
import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './line-graph.module.scss';
import {curveCardinal, max, svg} from "d3";
import {Nouns} from "../../enums/nouns";
import  '../../styles/colors.scss'


interface LineGraphProps {}


const PRIMARY_GREEN = '#199473'
const PRIMARY_RED = '#A61B1B'
const Y_TICKS = 5;
const SVG_WIDTH = 700;
const SVG_HEIGHT = 300;
const margin = {
    top : 50,
    right : 50,
    bottom : 50,
    left : 50,
}

const last7Days = () => {
    const today=new Date();
    //subtracting 6 days to get 7th day date
    today.setDate(today.getDate()-6);
    const last7Days:string[]=[];
    const formatDateAndPush = () => last7Days.push(today.toLocaleString("default",{month:"short"})+" "+today.getDate());
    formatDateAndPush()
    for(let i = 0; i<4;i++){
        today.setDate(today.getDate()+1);
        formatDateAndPush();
    }
    last7Days.push(Nouns.YESTERDAY,Nouns.TODAY);
    return last7Days
}



const LineGraph= (props:LineGraphProps) => {
    const [amount,setAmount]=useState<number[]>([25,70,45,60,20,90,80]);
    const [width,setWidth] = useState<number>(700);
    const [height,setHeight] = useState<number>(300);

    const svgref = useRef(null);

    useEffect(()=>{
        // @ts-ignore
        if(svgref?.current?.clientWidth){
            // @ts-ignore
            setWidth(svgref?.current?.clientWidth)
            // @ts-ignore
            setHeight(svgref?.current?.clientHeight)
        }
    },[])

    useEffect(()=>{


        const svg = d3.select("#chart")

        svg.selectAll(".xAxis").remove();
        svg.selectAll(".yAxis").remove();
        svg.selectAll(".area").remove();
        svg.selectAll(".stroke").remove();
        svg.selectAll("circle").remove();
        svg.selectAll(".hAxes").remove();


        // - - - - -  xAxis  - - - - -
        let xScale = d3.scaleBand()
            .domain(last7Days())
            .range([30,width])

        let xAxis = d3.axisBottom(xScale)
            .tickPadding(4)
            .tickSizeOuter(0);

        svg.append("g")
            .style("width","400px")
            .attr("transform", `translate(0,${height-30})`)
            .attr("class",`xAxis ${styles.xAxis}`)
            .attr("stroke-width","0.5")
            .call(xAxis)

        // - - - - -  yAxis  - - - - -
        let yScale = d3.scaleLinear()
            .domain([Math.max(...amount),Math.min(...amount)])
            .range([30,height-30]).nice(Y_TICKS);


        let yAxis = d3.axisLeft(yScale)
            .ticks(5)
            .tickSizeInner(0)


        svg.append("g").attr("class",`yAxis ${styles.yAxis}`)
            .attr("transform","translate(30,0)")
            .call(yAxis)

        // - - - - -  horizonatal axes - - - - -
        const ticks:number[] = yScale.ticks(Y_TICKS)
        ticks.pop();
        ticks.forEach(yValue=>{
            svg.append("line")
                .attr("x1",30)
                .attr("x2",width)
                .attr("y1",yScale(yValue))
                .attr("y2",yScale(yValue))
                .attr("stroke-width","0.2")
                .attr("class",`hAxes ${styles.hAxes}`)
        })

        // - - - - -  stroke  - - - - -
        let line = d3.line<number>()
            .x((value,index)=>(index+1)*xScale.bandwidth()-xScale.bandwidth()/2)
            .y(value => yScale(value))

        svg.append("path")
            .data([amount])
            .attr("d",value=>line(value))
            .attr("class",`stroke`)
            .attr("fill","none")
            .attr("stroke",PRIMARY_RED)
            .attr("transform","translate(30,0)")

        // - - - - -  area  - - - - -
        let area = d3.area<number>()
            .x((value,index)=>(index+1)*xScale.bandwidth()-xScale.bandwidth()/2)
            .y0(height-30)
            .y1((value,index)=>yScale(value))

        svg.append("path")
            .attr("class","area")
            .data([amount])
            .attr("d",area)
            .attr("transform","translate(30,0)")
            .attr("fill","url(#mygrad)");

        // - - - - -  circles  - - - - -
        let iLength = last7Days().length;
        for (let i = 0; i < iLength; i++) {
            svg.append("circle")
                .attr("cy",yScale(amount[i]))
                .attr("cx",(i+1)*xScale.bandwidth()-xScale.bandwidth()/2+30)
                .attr("r","4")
                .attr("fill",PRIMARY_RED)
                .on("mouseover",()=>{
                    svg.append("circle")
                        .attr("cy",yScale(amount[i]))
                        .style("opacity","0")
                        .attr("cx",(i+1)*xScale.bandwidth()-xScale.bandwidth()/2+30)
                        .attr("r","7")
                        .attr("fill","none")
                        .attr("stroke",PRIMARY_RED)
                        .attr("class","circleHover")
                        .transition()
                        .delay(50)
                        .style("opacity","1")
                })
                .on("mouseout",()=>{
                    svg.selectAll(".circleHover").remove()
                })
        }

        //- - - - - Gradient - - - - -
        const lg = svg.append("defs")
            .append("linearGradient") // linear gradient
            .attr("id", "mygrad")
            .attr("x1", "0%")
            .attr("x2", "0%")
            .attr("y1", "0%")
            .attr("y2", "100%");
        lg.append("stop")
            .attr("offset", "0%")
            .style("stop-color",PRIMARY_RED )
            .style("stop-opacity", 0.30);
        lg.append("stop")
            .attr("offset", "100%")
            .style("stop-color", PRIMARY_RED)
            .style("stop-opacity", 0.05);

        //- - - - -  Removes yAxis line  - - - - -
        svg.select(".yAxis .domain").remove();
    },[width])


  return (
      <div className={styles.LineGraph}>
          <svg ref={svgref} id={"chart"} viewBox={'0 0 1100 150'} >
          </svg>
      </div>
  )
};

export default LineGraph;
