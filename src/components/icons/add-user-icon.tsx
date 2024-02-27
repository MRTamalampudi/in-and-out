import React from "react";
import IconProps from "components/icons/icon-props";

const AddUserIcon = ({ className, height = 24, width = 24 }: IconProps) => {
    return (
        <>
            <svg
                className={className}
                width={width}
                height={height}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_944_3193)">
                    <path
                        d="M67.0455 43.1818H77.2727M77.2727 43.1818H87.5M77.2727 43.1818V32.9546M77.2727 43.1818V53.4091M12.5 77.2727V73.8637C12.5 67.5346 15.0142 61.4648 19.4895 56.9895C23.9648 52.5142 30.0346 50 36.3636 50M36.3636 50C42.6927 50 48.7625 52.5142 53.2378 56.9895C57.7131 61.4648 60.2273 67.5346 60.2273 73.8637V77.2727M36.3636 50C39.9802 50 43.4487 48.5633 46.006 46.006C48.5633 43.4487 50 39.9802 50 36.3637C50 32.7471 48.5633 29.2786 46.006 26.7213C43.4487 24.164 39.9802 22.7273 36.3636 22.7273C32.747 22.7273 29.2786 24.164 26.7213 26.7213C24.164 29.2786 22.7273 32.7471 22.7273 36.3637C22.7273 39.9802 24.164 43.4487 26.7213 46.006C29.2786 48.5633 32.747 50 36.3636 50Z"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_944_3193">
                        <rect width="100" height="100" fill="currentColor" />
                    </clipPath>
                </defs>
            </svg>
        </>
    );
};

export default React.memo(AddUserIcon);
