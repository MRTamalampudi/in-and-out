import React, { memo, useCallback, useState } from "react";
import styles from "./modal.module.scss";
import { Modal, ModalProps as ModalProps_ } from "@mantine/core";
import ModalHeader, { ModalHeaderProps } from "components/header/modal-header";
import { useWindowEvent } from "utils/use-window-event";
import { CLICK_EVENT_KEYS, CustomEvents } from "constants/custom-events";

type ModalProps = {
    target?: React.ReactNode;
    children: React.ReactNode;
    opened?: boolean;
} & ModalHeaderProps & Pick<ModalProps_,"size">;

const ModalWrapper = ({
    target,
    children,
    title,
    opened,
    onClose,
    size
}: ModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const onCloseHandler = useCallback(() => {
        setIsModalOpen(false);
        onClose && onClose();
    }, [onClose]);

    return (
        <div className={styles.Modal}>
            <div
                onClick={(event) => {
                    event.stopPropagation();
                    setIsModalOpen(true);
                }}
            >
                {target}
            </div>
            {(opened || isModalOpen) && (
                <ModalWrapper.Root
                    title={title}
                    isModalOpen={isModalOpen}
                    opened={opened}
                    onCloseHandler={onCloseHandler}
                    size={size}
                >
                    {children}
                </ModalWrapper.Root>
            )}
        </div>
    );
};

type ModalWrapperRoot = {
    isModalOpen: boolean;
    onCloseHandler: () => void;
} & Omit<ModalProps, "target" | "onClose"> & Pick<ModalProps_, "size">;

function Root_({
    children,
    title,
    opened,
    isModalOpen,
    onCloseHandler,
    size
}: ModalWrapperRoot) {
    const closeModalListner = (e: any) => {
        if (e.key === CLICK_EVENT_KEYS.CLOSE_MODAL) {
            onCloseHandler();
        }
    };

    useWindowEvent(CustomEvents.CLICK, closeModalListner);

    return (
        <Modal
            opened={opened || isModalOpen}
            onClose={onCloseHandler}
            centered={true}
            withCloseButton={false}
            padding={0}
            size={size}
        >
            {title ? (
                <ModalWrapper.Header title={title} onClose={onCloseHandler} />
            ) : null}
            {children}
        </Modal>
    );
}

type ReactNodeChildren = {
    children: React.ReactNode;
};

function Footer_({ children }: ReactNodeChildren) {
    return <div className={styles.footer}>{children}</div>;
}

function Header_(props: ModalHeaderProps) {
    return <ModalHeader {...props} />;
}

function Body_({ children }: ReactNodeChildren) {
    return <div className={styles.body}>{children}</div>;
}

ModalWrapper.Footer = Footer_;
ModalWrapper.Header = Header_;
ModalWrapper.Body = Body_;
ModalWrapper.Root = React.memo(Root_);

export default ModalWrapper;
