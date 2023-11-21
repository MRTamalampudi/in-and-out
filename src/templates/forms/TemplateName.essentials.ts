import FormEssentialsType from "forms/hooks/form-essentials";
import {z} from "zod";

const useTemplateNameEssentials = ():FormEssentialsType<{}> => {

    // @ts-ignore
    const schema = z.object<{}>({

    })

    const defaultValues:Partial<{}> = {

    }

    const emptyValues:Partial<{}>= {

    }

    return {
        schema,
        defaultValues,
        emptyValues
    }
}

export default useTemplateNameEssentials;