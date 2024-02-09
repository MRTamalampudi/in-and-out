type UpdateSearchParamsOptions = {
    searchParams: URLSearchParams;
    keys: Record<string, string>;
    omit?: string[];
    pick?: string[];
};

export function updateSearchParams(options: UpdateSearchParamsOptions) {
    const { searchParams, keys, omit, pick } = options;
    const updateSearchParams = () => {
        Object.entries(keys).map((value) => {
            if (!!omit) {
                !omit.includes(value[0]) && searchParams.set(value[0], value[1]);
            } else if (!!pick) {
                pick.includes(value[0]) && searchParams.set(value[0], value[1]);
            } else {
                searchParams.set(value[0], value[1]);
            }
        });
        return searchParams;
    };

    const cleanUpParams = () => {
        Object.entries(keys).map((value) => searchParams.delete(value[0]));
    };
    return [updateSearchParams, cleanUpParams];
}
