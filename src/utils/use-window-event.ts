import { useEffect } from "react";

export function useWindowEvent<K extends string>(
    type: K,
    listener: K extends keyof WindowEventMap
        ? (this: Window, ev: WindowEventMap[K]) => void
        : (this: Window, ev: CustomEvent) => void,
    options?: boolean | AddEventListenerOptions
) {
    useEffect(() => {
        console.log("effect")
        window.addEventListener(type as any, listener, options);
        return () => {
            console.log("cleanup")
            window.removeEventListener(type as any, listener, options);
        };
    }, [type, listener]);
}