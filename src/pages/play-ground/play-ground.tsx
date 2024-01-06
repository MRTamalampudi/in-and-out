import React, { FC } from "react";
import styles from "./play-ground.module.scss";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@mantine/core";

interface PlayGroundProps {}

const PlayGround = ({}: PlayGroundProps) => {

    return (
        <div className={styles.PlayGround}>

        </div>
    );
};

export default PlayGround;
