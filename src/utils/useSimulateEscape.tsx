import { CustomEvents } from "constants/custom-events";
import { useCallback } from "react";

export function useSimulateEscape() {
    return useCallback(() => {
        window.dispatchEvent(
            new KeyboardEvent(CustomEvents.KEYDOWN, {
                key: "escape-simulator",
            }),
        );
    }, []);
}
