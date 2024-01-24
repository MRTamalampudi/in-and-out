import { Avatar, MantineRadius, MantineSize } from "@mantine/core";
import React from "react";
import styles from "./text-avatar.module.scss";

type TextAvatarProps = {
    text: string;
    size?: MantineSize;
    radius?: MantineRadius;
};
const TextAvatar = ({ text, size, radius }: TextAvatarProps) => {
    const splittedText = text && text.split(" ");
    const textContainsMoreThanOneWord = splittedText.length > 1;
    const firstCharacter = (str: string) => str.charAt(0);
    const wordAtIndex = (index: number) => splittedText?.at(index)!;
    const transformedText = (
        textContainsMoreThanOneWord
            ? `${firstCharacter(wordAtIndex(0))}${firstCharacter(
                  wordAtIndex(-1),
              )}`
            : wordAtIndex(0)?.length
              ? wordAtIndex(0)?.substring(0, 2)
              : wordAtIndex(0)
    )?.toUpperCase();

    const total =
        transformedText && transformedText
            .split("")
            .reduce((acc, value) => acc + value.charCodeAt(0), 0);

    const mod10 = (total || 0) % 10;

    const styleValues = Object.values(styles);
    const root = styleValues[mod10];

    return (
        <Avatar
            color={"red"}
            size={size || "sm"}
            radius={radius || "sm"}
            className={root}
        >
            {transformedText}
        </Avatar>
    );
};

export default React.memo(TextAvatar);
