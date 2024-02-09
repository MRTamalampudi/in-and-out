import React from "react";
import IconProps from "components/icons/icon-props";

const TemplateName = ({ className, height = 24, width = 24 }: IconProps) => {
    return (
        <>
            <svg
                className={className}
                width={width}
                height={height}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            ></svg>
        </>
    );
};

export default React.memo(TemplateName);