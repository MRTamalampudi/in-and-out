import {FieldValues, useController} from "react-hook-form";
import {InputProps} from "components/form/input-props";

const TemplateName =<T extends FieldValues>(props:InputProps<T>) => {
    const {label,placeholder}=props;
    const {field,formState:{errors}} = useController<T>(props);

    return(
        <>

        </>
    )

};

export default TemplateName;