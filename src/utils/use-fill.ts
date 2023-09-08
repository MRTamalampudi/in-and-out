import React, {useEffect, useRef, useState} from "react";

export function useFill(ref:React.MutableRefObject<any>) {
    const [fill,setFill] = useState<string>("red");
    useEffect(()=>{
        setFill(getComputedStyle(ref?.current!).color)
    },[fill])

    return {fill}
}