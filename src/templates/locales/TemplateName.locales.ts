import {useTranslation} from "react-i18next";

const useTemplateNameTranslations = () => {
    const TEMPLATE_NAME:string = "templateName.";
    const {t} = useTranslation();

    const templateName= {

    }

    return {
        templateName
    }
}

export default useTemplateNameTranslations;