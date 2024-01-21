import styles from "./text-avatar.module.scss";
import { Avatar } from "@mantine/core";
import React from "react";

type TextAvatarProps = {
    text: string;
};
const TextAvatar = ({ text }: TextAvatarProps) => {
    const splittedText = text.split(" ");
    const textContainsMoreThanOneWord = splittedText.length > 1;
    const firstCharacter = (str: string) => str.charAt(0);
    const wordAtIndex = (index: number) => splittedText?.at(index)!;
    const transformedText = (
        textContainsMoreThanOneWord
            ? `${firstCharacter(wordAtIndex(0))}
            ${firstCharacter(wordAtIndex(-1))}`
            : wordAtIndex(0)?.length
              ? wordAtIndex(0)?.substring(0, 2)
              : wordAtIndex(0)
    )?.toUpperCase();

    return (
        <Avatar color={"red"} size={"sm"} radius={"sm"}>
            {transformedText}
        </Avatar>
    );
};

export default TextAvatar;
