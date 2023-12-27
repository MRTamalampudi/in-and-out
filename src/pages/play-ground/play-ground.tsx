import React, { FC } from "react";
import styles from "./play-ground.module.scss";
import FilterField from "components/filter-field";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@mantine/core";

interface PlayGroundProps {}

const PlayGround = ({}: PlayGroundProps) => {
    const { control, watch, handleSubmit } = useForm();
    const { fields, append, update } = useFieldArray({
        control,
        name: "filters",
    });

    console.log("rerender")

    return (
        <div className={styles.PlayGround}>
            {fields.map((field, index) => {
                console.log(field.id)

                return <FilterField update={update} index={index} />;
            })}
            <Button onClick={() => append({})}>Add filter</Button>
            <Button onClick={handleSubmit((data) => console.log(data))}>
                show
            </Button>
            <FilterField />
        </div>
    );
};

export default PlayGround;
