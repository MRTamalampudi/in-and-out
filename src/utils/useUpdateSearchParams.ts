export function useUpdateSearchParams() {
    const updateSearchParams = (searchParams:URLSearchParams,keys:Record<string, any>)=>{
        console.log("effect ==>", searchParams.toString())
        Object.entries(keys).map((value) =>
            searchParams.set(value[0], value[1].toString()),
        );
        return searchParams;
    }

    const cleanUpParams = (searchParams:URLSearchParams,keys:Record<string, any>) =>{
        Object.entries(keys).map((value) => searchParams.delete(value[0]));
        console.log("clean up ==>", searchParams.toString())
    }
    return [updateSearchParams,cleanUpParams]
}