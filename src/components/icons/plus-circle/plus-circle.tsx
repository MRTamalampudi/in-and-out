import React, {useRef} from 'react';
import IconProps from "components/icons/icon-props";
import {useFill} from "utils/use-fill";

const PlusCircle = ({
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
                <g clip-path="url(#clip0_528_3158)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45.834 45.8301V16.67C45.834 14.37 47.701 12.5 50 12.5C52.3 12.5 54.167 14.37 54.167 16.67V45.8301H83.334C85.633 45.8301 87.5 47.7 87.5 50C87.5 52.3 85.633 54.17 83.334 54.17H54.167V83.3301C54.167 85.6301 52.3 87.5 50 87.5C47.701 87.5 45.834 85.6301 45.834 83.3301V54.17H16.667C14.367 54.17 12.5 52.3 12.5 50C12.5 47.7 14.367 45.8301 16.667 45.8301H45.834Z"
                        fill="#fff"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45.834 45.8301V16.67C45.834 14.37 47.701 12.5 50 12.5C52.3 12.5 54.167 14.37 54.167 16.67V45.8301H83.334C85.633 45.8301 87.5 47.7 87.5 50C87.5 52.3 85.633 54.17 83.334 54.17H54.167V83.3301C54.167 85.6301 52.3 87.5 50 87.5C47.701 87.5 45.834 85.6301 45.834 83.3301V54.17H16.667C14.367 54.17 12.5 52.3 12.5 50C12.5 47.7 14.367 45.8301 16.667 45.8301H45.834ZM45.834 50C48.135 50 50 51.87 50 54.17C50 51.87 51.866 50 54.167 50C51.866 50 50 48.1301 50 45.8301C50 48.1301 48.135 50 45.834 50Z"
                        fill="#fff"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_528_3158">
                        <rect
                            width="100"
                            height="100"
                            fill="white"
                        />
                    </clipPath>
                </defs>
            </svg>
        </>
    )
};

export default PlusCircle;