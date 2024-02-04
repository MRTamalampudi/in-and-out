import axios from "axios";
import { User } from "model";
import { URL_CONSTANTS } from "constants/url.constants";
import { useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "service/react-query-hooks/query-keys";

export function getUser() {
    return axios
        .get<User>(URL_CONSTANTS.USER)
        .then((res) => User.deserialise(res.data))
        .catch((err) => {
            throw new Error(err);
        });
}

export function useUserContext() {
    const queryClient = useQueryClient();
    return queryClient.getQueryData([QueryKeys.USER]) as unknown as User;
}
