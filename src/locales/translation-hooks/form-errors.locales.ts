import {useTranslation} from "react-i18next";

const useFormErrorsTranslations = () => {
    const FORM_ERRORS:string = "form.errors.";

    const {t} = useTranslation();

    const formErrors= {
        EMAIL:t(FORM_ERRORS+"email"),
        PASSWORD:t(FORM_ERRORS + "password")
    }

    return {
        formErrors
    }
}

export default useFormErrorsTranslations;