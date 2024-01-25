import React, { useRef } from "react";
import IconProps from "components/icons/icon-props";
import { useFill } from "components/icons/use-fill";

const Paperclip = ({ className, height = 24, width = 24 }: IconProps) => {
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
                <g clipPath="url(#clip0_356_18997)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M66.6663 64.583C66.6663 73.7821 59.1983 81.2501 50.0003 81.2501C40.8013 81.2501 33.3333 73.7821 33.3333 64.583L33.3333 39.583C33.3333 38.434 34.2293 37.5 35.3333 37.5C36.4373 37.5 37.3333 38.434 37.3333 39.583V64.583C37.3333 68.079 38.7533 71.245 41.0453 73.5381C43.3383 75.8301 46.5043 77.2501 50.0003 77.2501C53.4953 77.2501 56.6613 75.8301 58.9543 73.5381C61.2473 71.245 62.6663 68.079 62.6663 64.583L62.6663 31.25C62.6663 28.904 61.7143 26.78 60.1753 25.241C58.6363 23.703 56.5123 22.75 54.1663 22.75C51.8213 22.75 49.6963 23.703 48.1583 25.241C46.6193 26.78 45.6663 28.904 45.6663 31.25L45.6663 64.583C45.6663 65.779 46.1523 66.862 46.9373 67.646C47.7213 68.431 48.8043 68.917 50.0003 68.917C51.1953 68.917 52.2783 68.431 53.0633 67.646C53.8473 66.862 54.3333 65.779 54.3333 64.583L54.3333 39.583H54.3363C54.3343 39.543 54.3333 39.503 54.3333 39.462C54.3333 38.312 55.2293 37.378 56.3333 37.378C57.4373 37.378 58.3333 38.312 58.3333 39.462C58.3333 39.503 58.3323 39.543 58.3303 39.583H58.3333L58.3333 64.583C58.3333 69.183 54.5993 72.9171 50.0003 72.9171C45.4003 72.9171 41.6663 69.183 41.6663 64.583L41.6663 31.25C41.6663 24.351 47.2673 18.75 54.1663 18.75C61.0653 18.75 66.6663 24.351 66.6663 31.25V64.583Z"
                        fill={fill}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_356_18997">
                        <rect width="100" height="100" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </>
    );
};

export default React.memo(Paperclip);
