import { useCallback } from "react";

export function useDispatchEvent() {
    return useCallback((event: string, key: string) => {
        window.dispatchEvent(
            new KeyboardEvent(event, {
                key,
            }),
        );
    }, []);
}