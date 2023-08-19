import React, { FC } from 'react';

interface IconProps {
    src:string,
    size?: "sm" | "l" | "xl",
}

const Icon = ({
                  src,
                  size
              }:IconProps) => {

    const iconSize = () => {
        switch (size) {
            case "sm":
                return "icon20-card"
            case "l":
                return "icon28-card"
            case "xl":
                return "icon32-card"
            default:
                return "icon24-card"
        }
    }

    return (
        <div className={`${iconSize()}`}>
            <img src={src} className={"icon20"}/>
        </div>
    )
}

export default Icon;