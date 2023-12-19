import {useTranslation} from "react-i18next";
import { useMemo } from "react";

const useTemplateNameTranslations = () => {
    const TEMPLATE_NAME:string = "templateName.";
    const {t} = useTranslation();

    const templateName= useMemo(()=>({}),[])

    return {
        templateName
    }
}

export default useTemplateNameTranslations;