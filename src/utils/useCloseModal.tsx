import { CLICK_EVENT_KEYS, CustomEvents } from "constants/custom-events";
import { useCallback } from "react";

export function useCloseModal() {
    return useCallback(() => {
        window.dispatchEvent(
            new KeyboardEvent(CustomEvents.CLICK, {
                key: CLICK_EVENT_KEYS.CLOSE_MODAL,
            }),
        );
    }, []);
}
