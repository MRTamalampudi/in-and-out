import React from "react";
import IconProps from "components/icons/icon-props";

const SortDesc = ({ className, height = 24, width = 24 }: IconProps) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox="0 0 100 100"
                className={className}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M51.326 81.3501C51.03 81.7901 50.534 82.0601 50 82.0601C49.468 82.0601 48.97 81.7901 48.674 81.3501C45.658 76.8201 38.29 65.7701 34.986 60.8101C34.66 60.3301 34.63 59.6999 34.906 59.1799C35.184 58.6599 35.724 58.3401 36.312 58.3401C42.64 58.3401 57.36 58.3401 63.688 58.3401C64.276 58.3401 64.816 58.6599 65.094 59.1799C65.372 59.6999 65.34 60.3301 65.014 60.8101C61.71 65.7701 54.342 76.8201 51.326 81.3501Z"
                    fill={"currentColor"}
                />
            </svg>
        </>
    );
};

export default React.memo(SortDesc);
