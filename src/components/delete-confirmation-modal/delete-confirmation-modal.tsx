import React from "react";
import styles from "./delete-confirmation-modal.module.scss";
import ModalWrapper from "../modal";
import DeleteIcon from "../icons/delete-icon";
import useAlertsTranslations from "locales/translation-hooks/alerts.locales";
import { Button } from "@mantine/core";
import { CustomEvents } from "constants/custom-events";
import ReceiptBill from "components/recipt-bill";
import { ReceiptBillProps } from "components/recipt-bill/receipt-bill";
import { WarningSvg } from "components/svg/warning.svg";

type DeleteConfirmationModalProps = {
    context: string;
} & ModalFooterButtonProps &
    ReceiptBillProps;

export type ModalFooterButtonProps = {
    primary?: () => void;
    secondary?: () => void;
};

const DeleteConfirmationModal = (props: DeleteConfirmationModalProps) => {
    const { context, primary } = props;
    const reciptBillProps: ReceiptBillProps = {
        data: props.data,
        transformer: props.transformer,
    };

    const {
        alerts: { DELETE, DELETE_MULTIPLE },
    } = useAlertsTranslations(context);

    function simulateEscape() {
        const keyBoardEventInit: KeyboardEventInit = {
            key: "escape-simulator",
        };

        const keyboardEvent = new KeyboardEvent(
            CustomEvents.KEYDOWN,
            keyBoardEventInit,
        );
        window.dispatchEvent(keyboardEvent);
        console.log(keyboardEvent);
    }

    return (
        <ModalWrapper target={<DeleteIcon />}>
            <ModalWrapper.Body>
                <div className={styles.body}>
                    <WarningSvg width={64} height={64} />
                    {reciptBillProps.data?.length! > 1
                        ? DELETE_MULTIPLE
                        : DELETE}
                </div>
                <ReceiptBill {...reciptBillProps} />
            </ModalWrapper.Body>
            <ModalWrapper.Footer>
                <div className={styles.footer}>
                    <Button
                        size={"xs"}
                        color={"gray"}
                        variant={"outline"}
                        onClick={simulateEscape}
                    >
                        Cancel
                    </Button>
                    <Button size={"xs"} color={"c-red"} onClick={primary}>
                        Delete
                    </Button>
                </div>
            </ModalWrapper.Footer>
        </ModalWrapper>
    );
};

export default DeleteConfirmationModal;
