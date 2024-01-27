import { FieldErrors } from "react-hook-form/dist/types/errors";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";

const useErrorMessage = (errors: FieldErrors, props: any) => {
    return (
        errors[props.name] &&
        ((errors[props.name] as DeepMap<FieldValues, FieldError>).message ||
            (errors[props.name] as unknown as FieldError[])[0].message)
    );
};

export default useErrorMessage;
