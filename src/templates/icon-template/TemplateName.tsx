import React, {useRef} from 'react';
import IconProps from "components/icons/icon-props";
import {useFill} from "components/icons/use-fill";

const TemplateName = ({
    className,
    height= 24,
    width= 24
}:IconProps) => {

    const iconRef = useRef(null);
    const {fill} = useFill(iconRef);

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
            >

            </svg>
        </>
    )
};

export default React.memo(TemplateName);