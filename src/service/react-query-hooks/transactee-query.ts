import {useQuery} from "@tanstack/react-query";
import {indexTransactee} from "../transactee-service";
import { QueryKeys } from "service/react-query-hooks/query-keys";

function useGetTransacteeQuery() {
    const transacteeclient = useQuery({
        queryKey:[QueryKeys.TRANSACTEE],
        queryFn: indexTransactee
    })

    return transacteeclient;
}

export default useGetTransacteeQuery;