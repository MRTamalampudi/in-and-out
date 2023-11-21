import {useQuery} from "@tanstack/react-query";
import {indexTransactee} from "../transactee-service";

function useGetTransacteeQuery() {
    const transacteeclient = useQuery({
        queryKey:["transactees"],
        queryFn: indexTransactee
    })

    return transacteeclient;
}

export default useGetTransacteeQuery;