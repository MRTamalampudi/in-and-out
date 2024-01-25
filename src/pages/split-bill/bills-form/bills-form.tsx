import styles from "./bills-form.module.scss";
import { TextInputForm } from "forms/inputs";
import { useForm } from "react-hook-form";
import ModalWrapper from "components/modal";
import { useSearchParams } from "react-router-dom";
import { Dropzone } from "@mantine/dropzone";

type BillsFormProps = {};
const BillsForm = ({}: BillsFormProps) => {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleOnClose() {
        searchParams.delete("newBill");
        setSearchParams(searchParams);
    }

    return (
        <ModalWrapper
            opened={!!searchParams.get("newBill")}
            onClose={handleOnClose}
            title={"Add Bill"}
            size={"40rem"}
        >
            <BillsFormPresentation />
        </ModalWrapper>
    );
};

const BillsFormPresentation = () => {
    const { control, handleSubmit, reset, getValues } = useForm({
        mode: "onSubmit",
    });

    return (
        <div className={styles.BillsForm}>
            <TextInputForm name={"amount"} control={control} label={"Amount"} />
            <TextInputForm name={"bill"} control={control} label={"Bill"} />
            <TextInputForm name={"by"} control={control} label={"Paid by"} />
            <TextInputForm name={"on"} control={control} label={"Paid on"} />
            <Dropzone onDrop={()=>console.log("drop")}>
                <span>Drop the bills</span>
            </Dropzone>
        </div>
    );
};

export default BillsForm;
