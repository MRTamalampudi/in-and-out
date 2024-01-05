import React, { useRef } from "react";
import IconProps from "components/icons/icon-props";
import { useFill } from "components/icons/use-fill";

const Sort = ({ className, height = 24, width = 24 }: IconProps) => {
    const iconRef = useRef(null);
    const { fill } = useFill(iconRef);

    return (
        <>
            <span className={className} ref={iconRef} />
            <svg
                width={width}
                height={height}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.6743 18.6499C48.9703 18.2099 49.4663 17.9399 50.0003 17.9399C50.5323 17.9399 51.0303 18.2099 51.3263 18.6499C54.3423 23.1799 61.7103 34.2299 65.0143 39.1899C65.3403 39.6699 65.3703 40.3001 65.0943 40.8201C64.8163 41.3401 64.2763 41.6599 63.6883 41.6599C57.3603 41.6599 42.6403 41.6599 36.3123 41.6599C35.7243 41.6599 35.1843 41.3401 34.9063 40.8201C34.6283 40.3001 34.6603 39.6699 34.9863 39.1899C38.2903 34.2299 45.6583 23.1799 48.6743 18.6499Z"
                    fill={fill}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M51.326 81.3501C51.03 81.7901 50.534 82.0601 50 82.0601C49.468 82.0601 48.97 81.7901 48.674 81.3501C45.658 76.8201 38.29 65.7701 34.986 60.8101C34.66 60.3301 34.63 59.6999 34.906 59.1799C35.184 58.6599 35.724 58.3401 36.312 58.3401C42.64 58.3401 57.36 58.3401 63.688 58.3401C64.276 58.3401 64.816 58.6599 65.094 59.1799C65.372 59.6999 65.34 60.3301 65.014 60.8101C61.71 65.7701 54.342 76.8201 51.326 81.3501Z"
                    fill={fill}
                />
            </svg>
        </>
    );
};

export default React.memo(Sort);
