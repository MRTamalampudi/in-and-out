import {useTranslation} from "react-i18next";
import { useMemo } from "react";

const useFormErrorsTranslations = () => {
    const FORM_ERRORS:string = "form.errors.";

    const {t} = useTranslation();

    const formErrors= useMemo(()=>({
        EMAIL:t(FORM_ERRORS+"email"),
        PASSWORD:t(FORM_ERRORS + "password")
    }),[])

    return {
        formErrors
    }
}

export default useFormErrorsTranslations;