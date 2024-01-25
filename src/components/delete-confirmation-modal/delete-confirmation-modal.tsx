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
import { isPending } from "@reduxjs/toolkit";
import { useCloseModal } from "utils/useCloseModal";

type DeleteConfirmationModalProps = {
    context: string;
} & ModalFooterButtonProps &
    ReceiptBillProps;

export type ModalFooterButtonProps = {
    primary?: () => void;
    secondary?: () => void;
    isPending?:boolean;
};

const DeleteConfirmationModal = (props: DeleteConfirmationModalProps) => {
    const { context, primary,isPending = false } = props;
    const reciptBillProps: ReceiptBillProps = {
        data: props.data,
        transformer: props.transformer,
    };

    const {
        alerts: { DELETE, DELETE_MULTIPLE },
    } = useAlertsTranslations(context);

    const simulateEscape = useCloseModal();



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
                        onClick={(event) => {
                            event.stopPropagation();
                            simulateEscape();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        size={"xs"}
                        color={"c-red"}
                        onClick={(event) => {
                            event.stopPropagation();
                            if (primary) {
                                primary();
                            }
                            simulateEscape();
                        }}
                        loading={isPending}
                    >
                        Delete
                    </Button>
                </div>
            </ModalWrapper.Footer>
        </ModalWrapper>
    );
};

export default DeleteConfirmationModal;
