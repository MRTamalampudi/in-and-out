import React, { memo, useCallback, useState } from "react";
import styles from "./modal.module.scss";
import { Modal } from "@mantine/core";
import ModalHeader, { ModalHeaderProps } from "components/header/modal-header";
import { useWindowEvent } from "utils/use-window-event";
import { CustomEvents } from "constants/custom-events";

type ModalProps = {
    target: React.ReactNode;
    children: React.ReactNode;
    opened?: boolean;
} & ModalHeaderProps;

const ModalWrapper = ({
    target,
    children,
    title,
    opened,
    onClose,
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
            {
                (opened || isModalOpen) && <ModalWrapper.Root
                    title={title}
                    isModalOpen={isModalOpen}
                    opened={opened}
                    onCloseHandler={onCloseHandler}
                >
                    {children}
                </ModalWrapper.Root>
            }
        </div>
    );
};

type ModalWrapperRoot = {
    isModalOpen: boolean;
    onCloseHandler: () => void;
} & Omit<ModalProps, "target" | "onClose">;

ModalWrapper.Root = memo(({
    children,
    title,
    opened,
    isModalOpen,
    onCloseHandler,
}: ModalWrapperRoot) => {

    const escapeKeydownlistner = (e: any) => {
        console.log("newShit");
        if (e.key === "escape-simulator") {
            onCloseHandler();
        }
    };

    useWindowEvent(CustomEvents.KEYDOWN,escapeKeydownlistner);

    return (
        <Modal
            opened={opened || isModalOpen}
            onClose={onCloseHandler}
            centered={true}
            withCloseButton={false}
            padding={0}
        >
            {title ? (
                <ModalWrapper.Header title={title} onClose={onCloseHandler} />
            ) : null}
            {children}
        </Modal>
    );
});

type ReactNodeChildren = {
    children: React.ReactNode;
};

ModalWrapper.Footer = ({ children }: ReactNodeChildren) => {
    return <div className={styles.footer}>{children}</div>;
};

ModalWrapper.Header = (props: ModalHeaderProps) => {
    return <ModalHeader {...props} />;
};

ModalWrapper.Body = ({ children }: ReactNodeChildren) => {
    return <div className={styles.body}>{children}</div>;
};

export default ModalWrapper;
