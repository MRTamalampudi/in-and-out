export type SVGProps = {
    height?:number;
    width?:number;
}
export function WarningSvg({height=100,width=100}:SVGProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 132 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M59.676 19.6511C62.4867 14.7829 69.5133 14.783 72.324 19.6511L115.011 93.5869C117.821 98.4551 114.308 104.54 108.687 104.54H23.3132C17.6919 104.54 14.1786 98.4551 16.9892 93.5869L59.676 19.6511Z"
                fill="url(#paint0_radial_749_17)"
                fill-opacity="0.5"
            />
            <path
                d="M59.676 27.8662C62.4867 22.998 69.5133 22.998 72.324 27.8662L107.896 89.4793C110.707 94.3475 107.194 100.433 101.572 100.433H30.4277C24.8064 100.433 21.293 94.3475 24.1037 89.4793L59.676 27.8662Z"
                fill="url(#paint1_radial_749_17)"
                fill-opacity="0.5"
            />
            <path
                d="M59.676 37.9069C62.4867 33.0387 69.5133 33.0387 72.324 37.9069L99.2009 84.459C102.012 89.3272 98.4982 95.4124 92.8769 95.4124H39.1231C33.5018 95.4124 29.9885 89.3272 32.7992 84.459L59.676 37.9069Z"
                fill="url(#paint2_radial_749_17)"
            />
            <path
                d="M67.471 57.0754L67.2175 74.6519H64.2763L64.0227 57.0754H67.471ZM65.7469 81.7206C65.1214 81.7206 64.5848 81.5097 64.1368 81.0878C63.6889 80.6659 63.4649 80.1604 63.4649 79.5713C63.4649 78.9823 63.6889 78.4768 64.1368 78.0549C64.5848 77.633 65.1214 77.4221 65.7469 77.4221C66.3723 77.4221 66.909 77.633 67.3569 78.0549C67.8049 78.4768 68.0288 78.9823 68.0288 79.5713C68.0288 79.9614 67.9232 80.3196 67.7119 80.646C67.5091 80.9724 67.2344 81.2351 66.8879 81.4341C66.5498 81.6251 66.1695 81.7206 65.7469 81.7206Z"
                fill="url(#paint3_radial_749_17)"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_749_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(66 72.5928) rotate(90) scale(63.8951 63.8951)"
                >
                    <stop stop-color="#C92A2A" />
                    <stop
                        offset="0.640562"
                        stop-color="#FF8352"
                        stop-opacity="0"
                    />
                </radialGradient>
                <radialGradient
                    id="paint1_radial_749_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(66 72.1992) rotate(90) scale(64.6822 64.917)"
                >
                    <stop stop-color="#C92A2A" />
                    <stop
                        offset="0.640562"
                        stop-color="#FF8352"
                        stop-opacity="0"
                    />
                </radialGradient>
                <radialGradient
                    id="paint2_radial_749_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(66 71.5029) rotate(90) scale(66.0749 66.7436)"
                >
                    <stop stop-color="#C92A2A" />
                    <stop
                        offset="0.972736"
                        stop-color="#FF8352"
                        stop-opacity="0.85"
                    />
                </radialGradient>
                <radialGradient
                    id="paint3_radial_749_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(65.7469 49.3167) rotate(90.5026) scale(52.0308 9.63534)"
                >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0.36" />
                </radialGradient>
            </defs>
        </svg>
    );
}
