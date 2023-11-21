import FormEssentialsType from "forms/hooks/form-essentials";
import {z} from "zod";
import {UsernamePassword} from "model";
import {useFormErrorsTranslations} from "../../locales/translation-hooks";

const useLoginFormEssentials = ():FormEssentialsType<UsernamePassword> => {

    const {formErrors} = useFormErrorsTranslations();

    // @ts-ignore
    const schema = z.object<UsernamePassword>({
        username: z
            .string()
            .min(0),
        password: z
            .string()
            .min(0,{message:formErrors.PASSWORD})
    })

    const defaultValues:Partial<UsernamePassword> = {
        username: "",
        password: ""
    }

    const emptyValues:Partial<UsernamePassword>= {
        username: "",
        password: ""
    }

    return {
        schema,
        defaultValues,
        emptyValues
    }
}

export default useLoginFormEssentials;