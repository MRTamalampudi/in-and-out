import { MutationMeta } from "@tanstack/react-query";

export interface CustomMutationOptions{
    onMutate?: () => unknown;
    onSuccess?: () => unknown;
    onError?: () => unknown;
    onSettled?: () => unknown;
}