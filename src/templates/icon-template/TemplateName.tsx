import React, {useEffect, useRef, useState} from 'react';
import IconProps from "components/icons/icon-props";

const TemplateName = ({
    className,
    height= 24,
    width= 24
}:IconProps) => {

    const [fill,setFill] = useState<string>("red");
    const iconRef = useRef(null);
    useEffect(()=>{
        setFill(getComputedStyle(iconRef?.current!).color)
    },[fill])

    return (
        <>
            <span
                className={className}
                ref={iconRef}
            />
            <svg
                width={width}
                height={height}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >

            </svg>
        </>
    )
};

export default TemplateName;