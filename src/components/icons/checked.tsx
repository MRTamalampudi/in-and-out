import React, { useRef } from "react";
import IconProps from "components/icons/icon-props";
import { useFill } from "components/icons/use-fill";

function Checked({ className, height = 24, width = 24 }: IconProps){
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
                    d="M87.4997 16.67V83.33C87.4997 85.64 85.6327 87.4999 83.3337 87.4999H16.6667C14.3667 87.4999 12.4997 85.64 12.4997 83.33V16.67C12.4997 14.37 14.3667 12.4999 16.6667 12.4999H83.3337C85.6327 12.4999 87.4997 14.37 87.4997 16.67ZM42.1217 65.58L43.2137 66.67L71.4987 38.38C72.1487 37.73 72.1487 36.6799 71.4987 36.0299L69.4357 33.9701C68.7857 33.3101 67.7297 33.3101 67.0787 33.9701L43.2107 57.83L34.0737 48.7001C33.4237 48.0501 32.3677 48.0501 31.7167 48.7001L29.6547 50.7599C29.0037 51.4099 29.0037 52.47 29.6547 53.12L42.0287 65.4899C42.0587 65.5199 42.0897 65.55 42.1217 65.58Z"
                    fill={fill}
                />
            </svg>
        </>
    )
}

export default Checked;
