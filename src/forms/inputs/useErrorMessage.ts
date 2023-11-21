import {FieldErrors} from "react-hook-form/dist/types/errors";
import {DeepMap, FieldError, FieldValues} from "react-hook-form";

const useErrorMessage = (errors:FieldErrors,props:any) => {
  return errors[props.name] &&
      `${(errors[props.name] as DeepMap<FieldValues, FieldError>).message}`
}

export default useErrorMessage;