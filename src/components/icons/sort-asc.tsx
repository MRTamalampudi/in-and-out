import React from "react";
import IconProps from "components/icons/icon-props";

const SortAsc = ({ className, height = 24, width = 24 }: IconProps) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.6743 18.6499C48.9703 18.2099 49.4663 17.9399 50.0003 17.9399C50.5323 17.9399 51.0303 18.2099 51.3263 18.6499C54.3423 23.1799 61.7103 34.2299 65.0143 39.1899C65.3403 39.6699 65.3703 40.3001 65.0943 40.8201C64.8163 41.3401 64.2763 41.6599 63.6883 41.6599C57.3603 41.6599 42.6403 41.6599 36.3123 41.6599C35.7243 41.6599 35.1843 41.3401 34.9063 40.8201C34.6283 40.3001 34.6603 39.6699 34.9863 39.1899C38.2903 34.2299 45.6583 23.1799 48.6743 18.6499Z"
                    fill={"currentColor"}
                />
            </svg>
        </>
    );
};

export default React.memo(SortAsc);
